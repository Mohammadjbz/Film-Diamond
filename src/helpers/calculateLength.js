export function calculateLength(string) {
  const titleLength = string.split(" ").length;
  const result = titleLength > 2 ? "long" : "short";
  return result;
}
