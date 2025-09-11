export default function shortenText(text) {
  if (!text) return null;

  const splitting = text.split(" ");
  const result =
    splitting.length > 70 ? `${splitting.slice(0, 40).join(" ")} ...` : text;

  return result;
}
