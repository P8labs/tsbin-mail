import moment from "moment";

export function calculateExpiryTime(): string {
  return moment().add(24, "hours").toISOString();
}

export function isExpired(expiryTime: string): boolean {
  return moment(expiryTime).isBefore(moment());
}

export function formatExpiryTime(expiryTime: string): string {
  return moment(expiryTime).fromNow();
}

export function formatEmailDate(date: string): string {
  return moment(date).format("MMM D, YYYY h:mm A");
}
