import { generate } from "random-words";
import { reserved } from "./reserved";

export function sanitizeUsername(username: string): string {
  return username.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function generateRandomUsername(): string {
  const words = generate({ exactly: 3, join: "" }) as string;
  return sanitizeUsername(words);
}

export function constructEmailAddress(username: string): string {
  const sanitized = sanitizeUsername(username);
  return `${sanitized}@mail.tsbin.tech`;
}

export function isReserved(username: string): boolean {
  const normalizedUsername = username.toLowerCase().trim();

  // Check exact matches
  if (reserved.includes(normalizedUsername)) {
    return true;
  }

  // Check if it starts with reserved prefixes
  const reservedPrefixes = ["admin", "system", "support", "mod", "root"];
  if (
    reservedPrefixes.some((prefix) => normalizedUsername.startsWith(prefix))
  ) {
    return true;
  }

  // Check if it contains reserved patterns
  const reservedPatterns = ["noreply", "no-reply", "donotreply"];
  if (
    reservedPatterns.some((pattern) => normalizedUsername.includes(pattern))
  ) {
    return true;
  }

  return false;
}

export function validateUsername(username: string): {
  valid: boolean;
  error?: string;
} {
  const sanitized = sanitizeUsername(username);

  if (!sanitized) {
    return { valid: false, error: "Username cannot be empty" };
  }

  if (isReserved(sanitized)) {
    return { valid: false, error: "This username is reserved" };
  }

  if (sanitized.length < 3) {
    return { valid: false, error: "Username must be at least 3 characters" };
  }

  if (sanitized.length > 64) {
    return { valid: false, error: "Username must be less than 64 characters" };
  }

  return { valid: true };
}
