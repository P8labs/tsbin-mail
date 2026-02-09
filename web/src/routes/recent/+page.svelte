<script lang="ts">
  import { onMount } from "svelte";
  import { formatExpiryTime } from "$lib/utils";
  import { mailboxStore } from "$lib/store";
  import type { Mailbox } from "$lib/types";

  let mailboxes = $state<Mailbox[]>([]);
  let isLoading = $state(true);
  let error = $state("");

  async function loadMailboxes() {
    try {
      isLoading = true;
      error = "";
      const data = await mailboxStore.getRecentMailboxes(20);
      mailboxes = data;
    } catch (err: any) {
      error = err.message || "Failed to load recent mailboxes";
      mailboxes = [];
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    loadMailboxes();
  });
</script>

<svelte:head>
  <title>Recent Mailboxes | tsbin Mail</title>
  <meta
    name="description"
    content="View recently created temporary email addresses on tsbin Mail."
  />
</svelte:head>

<main>
  <div class="container">
    <nav class="breadcrumbs">
      <a href="/">Home</a>
      <span class="separator">/</span>
      <span class="current">Recent</span>
    </nav>

    <h1>Recent Mailboxes</h1>
    <p class="opacity-75">
      Recently created temporary email addresses. Click any mailbox to view its
      inbox.
    </p>

    {#if isLoading}
      <div class="loading">
        <div class="spinner"></div>
        <span class="loading-text">Loading recent mailboxes...</span>
      </div>
    {:else if error}
      <div class="text-center opacity-60" style="padding: 5rem 0;">
        <p>{error}</p>
      </div>
    {:else if mailboxes.length > 0}
      <div style="display: grid; gap: 1rem; margin-top: 3rem;">
        {#each mailboxes as mailbox}
          <a href="/email/{mailbox.address}" class="card">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="flex: 1;">
                <p class="font-mono font-medium" style="font-size: 1.125rem; margin-bottom: 0.25rem;">
                  {mailbox.address}
                </p>
                <p class="text-sm opacity-60" style="margin: 0;">
                  Expires {formatExpiryTime(mailbox.expiresAt)}
                </p>
              </div>
              <span class="text-sm opacity-75"> → </span>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="text-center opacity-60" style="padding: 5rem 0;">
        <p style="font-size: 1.125rem;">No recent mailboxes found</p>
        <p class="text-sm mt-2" style="margin-top: 0.5rem;">
          Create a mailbox on the <a href="/">home page</a> to get started.
        </p>
      </div>
    {/if}
  </div>
</main>
