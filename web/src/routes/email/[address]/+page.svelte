<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { formatExpiryTime, formatEmailDate } from "$lib/utils";
  import { mailboxStore } from "$lib/store";
  import type { Mailbox } from "$lib/types";

  const address = page.params.address;

  let mailbox = $state<Mailbox | null>(null);
  let isLoading = $state(true);
  let isRefreshing = $state(false);
  let error = $state("");

  async function loadMailbox() {
    try {
      isLoading = true;
      error = "";
      const data = await mailboxStore.getMailbox(address!);

      if (!data) {
        error = "Mailbox not found or has expired";
        mailbox = null;
      } else {
        mailbox = data;
      }
    } catch (err: any) {
      error = err.message || "Failed to load mailbox";
      mailbox = null;
    } finally {
      isLoading = false;
    }
  }

  async function refresh() {
    isRefreshing = true;
    await loadMailbox();
    isRefreshing = false;
  }

  onMount(() => {
    loadMailbox();
  });
</script>

<svelte:head>
  <title>{address} | tsbin Mail</title>imagerepliedthirty@mail.tsbin.tech
</svelte:head>

<main>
  <div class="container">
    {#if isLoading}
      <div class="loading">
        <div class="spinner"></div>
        <span class="loading-text">Loading mailbox...</span>
      </div>
    {:else if error}
      <div style="text-align: center; padding: 5rem 0;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Error</h1>
        <p class="opacity-75">{error}</p>
        <a href="/" style="margin-top: 2rem; display: inline-block;"
          >← Back to home</a
        >
      </div>
    {:else if mailbox}
      <nav class="breadcrumbs">
        <a href="/">Home</a>
        <span class="separator">/</span>
        <span class="current">{mailbox.address}</span>
      </nav>

      <div style="margin-bottom: 3rem;">
        <h2
          class="font-mono"
          style="word-break: break-all; margin-bottom: 1rem;"
        >
          {mailbox.address}
        </h2>
        <div
          style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; opacity: 0.75;"
        >
          <p style="margin: 0;">
            Expires {formatExpiryTime(mailbox.expiresAt)}
          </p>
          <button
            type="button"
            onclick={refresh}
            disabled={isRefreshing}
            class="secondary text-sm"
          >
            {isRefreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {#if mailbox.messages && mailbox.messages.length > 0}
        <div style="display: grid; gap: 1.5rem;">
          {#each mailbox.messages as message}
            <a
              href="/email/{mailbox.address}/message/{message.$id}"
              class="card"
            >
              <div
                style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem; gap: 1rem;"
              >
                <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0;">
                  {message.subject || "(No Subject)"}
                </h3>
                <span class="text-sm opacity-60" style="white-space: nowrap;">
                  {formatEmailDate(message.date)}
                </span>
              </div>
              <p class="opacity-75" style="margin: 0;">
                From: {message.from}
              </p>
            </a>
          {/each}
        </div>
      {:else}
        <div class="text-center opacity-60" style="padding: 5rem 0;">
          <p style="font-size: 1.125rem;">No messages yet</p>
          <p class="text-sm mt-2">
            Messages sent to this address will appear here automatically
          </p>
        </div>
      {/if}
    {/if}
  </div>
</main>
