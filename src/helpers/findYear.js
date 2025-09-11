export default function findYear(date) {
  if (!date) return null;
  const result = date.slice(0, 4);
  return result;
}
