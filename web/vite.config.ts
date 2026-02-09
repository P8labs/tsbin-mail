import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

let cachedCommitHash: string | null = null;

async function getLatestCommitHash(): Promise<string> {
  if (cachedCommitHash) {
    return cachedCommitHash;
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/P8labs/tsbin-mail/commits/master",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    cachedCommitHash = data.sha;
    return cachedCommitHash || "master";
  } catch (error) {
    console.error("Failed to fetch commit hash from GitHub:", error);
    return "dev";
  }
}

export default defineConfig(async ({ command, mode }) => {
  const commitHash = await getLatestCommitHash();
  const buildTime = new Date().toISOString();
  return {
    define: {
      "import.meta.env.GIT_HASH": JSON.stringify(commitHash.substring(0, 7)),
      "import.meta.env.BUILD_TIME": JSON.stringify(buildTime),
    },
    plugins: [sveltekit()],
  };
});
