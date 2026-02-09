export interface Mailbox {
  $id: string;
  address: string;
  expiresAt: string;
  messages?: Message[];
}

export interface Message {
  $id: string;
  from: string;
  to: string;
  subject: string;
  html?: string;
  text?: string;
  date: string;
  mailboxId: string;
}

export interface SavedMailbox {
  address: string;
  expiresAt: string;
}
