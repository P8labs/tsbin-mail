# Poopmail

A temporary email service that allows user to create disposible email addresses and recieve emails without registration.

Poopmail is live at https://mail.tsbin.tech

# Setup

The UI part of the project is in `frontend` folder.

```bash
cd frontend
pnpm install
pnpm dev
```

The Cloudflare worker that is grab all the emails and send to ingester

```bash

cd cf-worker
npx wrangler deploy
```
