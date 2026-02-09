<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { formatEmailDate } from "$lib/utils";
  import { mailboxStore } from "$lib/store";
  import type { Message } from "$lib/types";

  const address = page.params.address;
  const messageId = page.params.messageId;

  let message = $state<Message | null>(null);
  let isLoading = $state(true);
  let error = $state("");

  async function loadMessage() {
    try {
      isLoading = true;
      error = "";
      const data = await mailboxStore.getMessage(messageId!);

      if (!data) {
        error = "Message not found";
        message = null;
      } else {
        message = data;
      }
    } catch (err: any) {
      error = err.message || "Failed to load message";
      message = null;
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    loadMessage();
  });
</script>

<svelte:head>
  <title>{message?.subject || "Message"} | tsbin Mail</title>
</svelte:head>

<main>
  <div class="container">
    {#if isLoading}
      <div class="loading">
        <div class="spinner"></div>
        <span class="loading-text">Loading message...</span>
      </div>
    {:else if error}
      <div style="text-align: center; padding: 5rem 0;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Error</h1>
        <p class="opacity-75">{error}</p>
        <a
          href="/email/{address}"
          style="margin-top: 2rem; display: inline-block;">← Back to mailbox</a
        >
      </div>
    {:else if message}
      <nav class="breadcrumbs">
        <a href="/">Home</a>
        <span class="separator">/</span>
        <a href="/email/{address}">{address}</a>
        <span class="separator">/</span>
        <span class="current">Message</span>
      </nav>

      <div style="margin-bottom: 2rem;">
        <h1 style="margin-bottom: 1.5rem;">
          {message.subject || "(No Subject)"}
        </h1>

        <div
          class="border-b"
          style="padding-bottom: 1.5rem; margin-bottom: 1.5rem; opacity: 0.75;"
        >
          <p style="margin-bottom: 0.5rem;">
            <strong>From:</strong>
            {message.from}
          </p>
          <p style="margin-bottom: 0.5rem;">
            <strong>To:</strong>
            {message.to}
          </p>
          <p style="margin: 0;">
            <strong>Date:</strong>
            {formatEmailDate(message.date)}
          </p>
        </div>
      </div>

      <div style="max-width: none;">
        {#if message.html}
          {@html message.html}
        {:else if message.text}
          <pre
            style="white-space: pre-wrap; font-family: inherit;">{message.text}</pre>
        {:else}
          <p class="opacity-60">(Empty message)</p>
        {/if}
      </div>
    {/if}
  </div>
</main>
