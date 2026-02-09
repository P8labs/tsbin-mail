<svelte:head>
  <title>About | tsbin Mail</title>
  <meta
    name="description"
    content="About tsbin Mail - a temporary email service by tsbin.tech. Privacy-focused, open-source, and completely free."
  />
</svelte:head>

<main>
  <div class="container">
    <h1>About</h1>

    <section>
      <p>
        tsbin Mail is a privacy-first temporary email service for testing,
        verification, and spam-free communication.
      </p>
      <p>
        It was built to solve a common problem: needing an email address for
        one-time signups or tests without exposing your primary inbox.
      </p>
      <p>
        tsbin Mail takes a privacy-first approach. All mailboxes auto-delete
        after 24 hours. No accounts. No tracking. No permanent storage.
      </p>
      <p>
        The philosophy is straightforward: utility software should be fast,
        predictable, and respect your privacy by default.
      </p>
    </section>

    <section>
      <h2>Design Principles</h2>
      <p>tsbin Mail follows a set of core principles:</p>
      <ul>
        <li>24-hour auto-deletion — no permanent storage</li>
        <li>No registration — instant email addresses</li>
        <li>Zero tracking — no analytics or telemetry</li>
        <li>Open source — transparent and auditable</li>
        <li>Minimal feature set — does one thing well</li>
      </ul>
      <p>These principles guide every technical decision.</p>
    </section>

    <section>
      <h2>How It Works</h2>
      <p>
        Create a temporary email address instantly. Receive emails for 24 hours.
        After that, the mailbox and all messages are permanently deleted.
      </p>
      <p>
        No signup required. No email verification. No password to remember. Just
        a simple, disposable email address.
      </p>
      <p>
        Perfect for testing applications, signing up for newsletters, or any
        situation where you need an email address but don't want spam.
      </p>
    </section>

    <section>
      <h2>About tsbin</h2>
      <p>tsbin is a home for small, useful software.</p>
      <p>
        It's a collection of utilities built with a focus on simplicity,
        privacy, and long-term reliability.
      </p>
      <p>
        Each tool serves a clear purpose without unnecessary features or
        dependencies.
      </p>
      <p>No engagement loops. No growth tactics. Just tools.</p>
    </section>

    <section>
      <h2>About P8labs</h2>
      <p>
        P8labs is an independent technology lab exploring developer tools, AI
        systems, and infrastructure-style software.
      </p>
      <p>
        The lab focuses on building practical systems that solve real problems
        without unnecessary complexity.
      </p>
      <p>
        Projects are designed for durability over novelty, utility over
        attention.
      </p>
    </section>

    <section>
      <h2>Technical Details</h2>
      <p>tsbin Mail is built using modern web standards and SvelteKit.</p>
      <p>
        The codebase is intentionally small and focused. Backend uses Appwrite
        for database operations.
      </p>
      <p>
        Email receiving is handled through standard SMTP protocols. All data is
        automatically purged after 24 hours.
      </p>
      <p>
        The entire system is designed to be maintainable and reliable for years.
      </p>
    </section>

    <section>
      <h2>Open Source</h2>
      <p>tsbin Mail is fully open source under a permissive license.</p>
      <p>You can review, modify, and distribute the code freely.</p>
      <p>Contributions are welcome through GitHub pull requests.</p>
      <p>
        <a
          href="https://github.com/P8labs/tsbin-mail"
          target="_blank"
          rel="noopener">View repository →</a
        >
      </p>
    </section>

    <section>
      <h2>Support</h2>
      <p>
        tsbin Mail is provided without formal support, but we do our best to
        address issues and feedback.
      </p>
      <p>
        For bugs, feature requests, or questions, please open an issue on
        GitHub.
      </p>
      <p>
        <a
          href="https://github.com/P8labs/tsbin-mail/issues"
          target="_blank"
          rel="noopener">GitHub Issues →</a
        >
      </p>
    </section>

    <section>
      <h2>Philosophy</h2>
      <p>
        Software should be quiet infrastructure that disappears until needed.
      </p>
      <p>
        The best tools are those you don't think about — they simply work when
        required.
      </p>
      <p>This is the standard tsbin Mail aims to meet.</p>
    </section>
  </div>
</main>
