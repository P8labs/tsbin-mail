<script lang="ts">
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import {
    generateRandomUsername,
    constructEmailAddress,
    validateUsername,
  } from "$lib/email";
  import { calculateExpiryTime, isExpired } from "$lib/utils";
  import { mailboxStore } from "$lib/store";
  import type { SavedMailbox } from "$lib/types";

  let username = $state("");
  let isLoading = $state(false);
  let error = $state("");
  let savedMailboxes = $state<SavedMailbox[]>([]);

  $effect(() => {
    if (browser) {
      const saved = localStorage.getItem("tsbin_mail_mailboxes");
      if (saved) {
        try {
          const parsed: SavedMailbox[] = JSON.parse(saved);
          savedMailboxes = parsed.filter((m) => !isExpired(m.expiresAt));

          if (parsed.length !== savedMailboxes.length) {
            localStorage.setItem(
              "tsbin_mail_mailboxes",
              JSON.stringify(savedMailboxes),
            );
          }
        } catch (e) {
          localStorage.removeItem("tsbin_mail_mailboxes");
        }
      }
    }
  });

  async function createMailbox(event: SubmitEvent) {
    event.preventDefault();
    error = "";
    isLoading = true;

    try {
      const finalUsername = username.trim() || generateRandomUsername();
      const validation = validateUsername(finalUsername);

      if (!validation.valid) {
        error = validation.error!;
        isLoading = false;
        return;
      }

      const address = constructEmailAddress(finalUsername);
      const expiresAt = calculateExpiryTime();

      await mailboxStore.createMailbox(address, expiresAt);

      if (browser) {
        const updated = [...savedMailboxes, { address, expiresAt }];
        localStorage.setItem("tsbin_mail_mailboxes", JSON.stringify(updated));
      }

      goto(`/email/${address}`);
    } catch (err: any) {
      error = err.message || "Failed to create mailbox. Please try again.";
    } finally {
      isLoading = false;
    }
  }

  function deleteMailbox(address: string) {
    savedMailboxes = savedMailboxes.filter((m) => m.address !== address);
    if (browser) {
      localStorage.setItem(
        "tsbin_mail_mailboxes",
        JSON.stringify(savedMailboxes),
      );
    }
  }

  function generateRandom() {
    username = generateRandomUsername();
  }
</script>

<main>
  <div class="container">
    <div class="hero" style="padding: 4rem 0;">
      <h1 style="font-size: 4.5rem; margin-bottom: 1rem;">TSBIN MAIL</h1>
      <div style="font-size: 1.5rem; margin-bottom: 1.5rem; font-weight: 500;">
        Temporary email addresses that auto-delete in 24 hours.
      </div>
      <div style="max-width: 42rem; opacity: 0.75; margin-bottom: 2.5rem;">
        <p>No registration. No tracking. No permanent storage.</p>
        <p>Perfect for testing, signups, and avoiding spam.</p>
      </div>

      <form onsubmit={createMailbox} style="margin-bottom: 2.5rem;">
        <div
          style="display: flex; flex-direction: column; gap: 1rem; align-items: center;"
        >
          <div class="unified-input-wrapper">
            <input
              type="text"
              bind:value={username}
              placeholder="username"
              class="unified-input"
              disabled={isLoading}
            />
            <span class="unified-domain">@mail.tsbin.tech</span>
          </div>

          <div class="hero-actions">
            <button
              type="submit"
              disabled={isLoading}
              style="min-width: 180px;"
            >
              {isLoading ? "Creating..." : "Create Mailbox"}
            </button>
            <button
              type="button"
              class="secondary"
              onclick={generateRandom}
              disabled={isLoading}
            >
              Random
            </button>
          </div>

          {#if error}
            <p style="margin: 0; color: #dc2626;">{error}</p>
          {/if}

          <p style="margin: 0; opacity: 0.6; font-size: 0.9375rem;">
            Leave blank for random username, or enter your own (alphanumeric
            only).
          </p>
        </div>
      </form>

      {#if savedMailboxes.length > 0}
        <div style="text-align: left;">
          <a
            href="/recent"
            style="text-decoration: none; border-bottom: 1px solid transparent;"
          >
            View your active mailboxes →
          </a>
        </div>
      {/if}
    </div>

    <section>
      <h2>What is tsbin Mail?</h2>
      <p>
        tsbin Mail is a temporary email service for testing, verification, and
        spam-free communication.
      </p>
      <p>
        Built for moments when you need an email address but don't want to use
        your primary inbox or deal with long-term consequences.
      </p>
      <p>Create an address. Use it. Watch it disappear after 24 hours.</p>
    </section>

    <section>
      <h2>Why tsbin Mail Exists</h2>
      <p>
        Most email services require registration and store your data
        indefinitely.
      </p>
      <p>
        tsbin Mail takes the opposite approach — everything auto-deletes after
        24 hours so your temporary communications stay temporary.
      </p>
      <p>
        Utility software should be simple, predictable, and respect your
        privacy.
      </p>
    </section>

    <section>
      <h2>Features</h2>
      <ul>
        <li>Instant temporary email addresses</li>
        <li>24-hour automatic deletion</li>
        <li>No registration required</li>
        <li>Zero tracking</li>
        <li>Zero permanent storage</li>
      </ul>
      <p>Small feature set. Clear behavior.</p>
    </section>

    <section>
      <h2>Privacy</h2>
      <p>Everything auto-deletes after 24 hours.</p>
      <p>
        No accounts required.<br />
        No tracking or analytics.<br />
        No permanent storage.
      </p>
      <p><a href="/privacy">Read the privacy policy →</a></p>
    </section>

    <section>
      <h2>Use Cases</h2>
      <p>Perfect for temporary email needs.</p>
      <ul>
        <li>Testing email functionality</li>
        <li>One-time signups</li>
        <li>Avoiding newsletter spam</li>
        <li>Temporary verifications</li>
      </ul>
    </section>

    <section>
      <h2>More Tools</h2>
      <div style="gap: 2rem;">
        <div>
          <h3>
            <a href="https://tsbin.tech" target="_blank" rel="noopener"
              >tsbin.tech</a
            >
          </h3>
          <p>
            Secure, temporary file and text sharing. Share sensitive information
            knowing it will automatically expire.
          </p>
        </div>
        <div>
          <h3>
            <a href="https://paper.tsbin.tech" target="_blank" rel="noopener"
              >paper.tsbin.tech</a
            >
          </h3>
          <p>Turn Markdown into something shareable. Paste, render, export.</p>
        </div>
        <div>
          <h3>
            <a href="https://locam.tsbin.tech" target="_blank" rel="noopener"
              >locam.tsbin.tech</a
            >
          </h3>
          <p>
            Private QR scanning and camera utility. Runs entirely on your
            device.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>About</h2>
      <p>
        tsbin Mail is an independent utility built with a focus on simplicity
        and long-term reliability.
      </p>
      <p>No growth tactics. No engagement loops. Just a tool.</p>
      <p><a href="/about">Learn more →</a></p>
    </section>
  </div>
</main>
