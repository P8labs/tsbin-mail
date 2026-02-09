<script lang="ts">
  import "../app.css";
  import moment from "moment";

  let { children } = $props();

  const buildTime = import.meta.env.BUILD_TIME;
  const gitHash = import.meta.env.GIT_HASH;
  const buildTimeAgo = moment(buildTime).fromNow();
</script>

<svelte:head>
  <title>tsbin Mail - Temporary Email Service</title>
  <meta
    name="description"
    content="Privacy-focused temporary email addresses. No registration required."
  />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="bg-effect"></div>

<header>
  <div class="container">
    <a href="/" class="logo">TSBIN MAIL</a>
    <nav>
      <a href="/recent">Recent</a>
      <a href="/about">About</a>
      <a href="/terms">Terms</a>
      <a
        href="https://github.com/P8labs/tsbin-mail"
        target="_blank"
        rel="noopener noreferrer">GitHub</a
      >
    </nav>
  </div>
</header>

<main class="py-20">
  {@render children()}
</main>

<footer>
  <div class="container">
    <div class="footer-copyright">
      © 2026 tsbin mail, Built at <a
        href="https://github.com/P8labs"
        target="_blank"
        rel="noopener">P8labs</a
      ><br />
      {buildTimeAgo} • {gitHash}
    </div>
    <div class="footer-links">
      <a
        href="https://github.com/P8labs/tsbin-mail"
        target="_blank"
        rel="noopener">GitHub</a
      >
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </div>
  </div>
</footer>
