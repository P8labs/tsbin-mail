import { Client, Databases } from "appwrite";

export const appwriteConfig = {
  endpoint: "https://sgp.cloud.appwrite.io/v1",
  projectId: "696c6eec0035a8a2b916",
  db: "696c6ffc0001edc93922",
  mailsCollection: "mails",
  messagesCollection: "messages",
};

export const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);
