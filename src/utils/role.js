export function normalizeRole(role) {
  return String(role || "").trim().toLowerCase();
}

export function isAdminRole(role) {
  return normalizeRole(role) === "admin";
}

export function isMemberRole(role) {
  return normalizeRole(role) === "member";
}
