import { databases, appwriteConfig } from "./appwrite";
import { Query } from "appwrite";
import type { Mailbox, Message } from "./types";
import { isExpired } from "./utils";

export class MailboxStore {
  async createMailbox(address: string, expiresAt: string): Promise<Mailbox> {
    try {
      const existing = await databases.listDocuments(
        appwriteConfig.db,
        appwriteConfig.mailsCollection,
        [Query.equal("address", address)],
      );

      if (existing.documents.length > 0) {
        const mailbox = existing.documents[0] as unknown as Mailbox;

        if (isExpired(mailbox.expiresAt)) {
          await databases.deleteDocument(
            appwriteConfig.db,
            appwriteConfig.mailsCollection,
            mailbox.$id,
          );
        } else {
          return mailbox;
        }
      }

      const response = await databases.createDocument(
        appwriteConfig.db,
        appwriteConfig.mailsCollection,
        "unique()",
        { address, expiresAt },
      );

      return response as unknown as Mailbox;
    } catch (error: any) {
      throw new Error(error.message || "Failed to create mailbox");
    }
  }

  async getMailbox(address: string): Promise<Mailbox | null> {
    try {
      const response = await databases.listDocuments(
        appwriteConfig.db,
        appwriteConfig.mailsCollection,
        [Query.equal("address", address)],
      );

      if (response.documents.length === 0) {
        return null;
      }

      const mailbox = response.documents[0] as unknown as Mailbox;

      if (isExpired(mailbox.expiresAt)) {
        await databases.deleteDocument(
          appwriteConfig.db,
          appwriteConfig.mailsCollection,
          mailbox.$id,
        );
        return null;
      }

      const messagesResponse = await databases.listDocuments(
        appwriteConfig.db,
        appwriteConfig.messagesCollection,
        [Query.equal("mailId", mailbox.$id), Query.orderDesc("$createdAt")],
      );

      mailbox.messages = messagesResponse.documents as unknown as Message[];

      return mailbox;
    } catch (error: any) {
      throw new Error(error.message || "Failed to load mailbox");
    }
  }

  async getMessage(messageId: string): Promise<Message | null> {
    try {
      const message = await databases.getDocument(
        appwriteConfig.db,
        appwriteConfig.messagesCollection,
        messageId,
      );

      return message as unknown as Message;
    } catch (error: any) {
      if (error.code === 404) {
        return null;
      }
      throw new Error(error.message || "Failed to load message");
    }
  }

  async getRecentMailboxes(limit: number = 20): Promise<Mailbox[]> {
    try {
      const response = await databases.listDocuments(
        appwriteConfig.db,
        appwriteConfig.mailsCollection,
        [Query.orderDesc("$createdAt"), Query.limit(limit)],
      );

      const mailboxes = response.documents.filter((doc: any) => {
        return !isExpired(doc.expiresAt);
      }) as unknown as Mailbox[];

      return mailboxes;
    } catch (error: any) {
      throw new Error(error.message || "Failed to load recent mailboxes");
    }
  }
}

export const mailboxStore = new MailboxStore();
