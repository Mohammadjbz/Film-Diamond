export default function percentage(number) {
  if (number === 0) return "N/R";

  if (number === undefined || number === null) return null;

  const result = Math.round(number * 10);
  return result;
}
