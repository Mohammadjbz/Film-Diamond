export default function calculateSeasons(seasons) {
  if (!seasons) return null;

  const count = seasons.length;
  const result = `${count} ${count > 1 ? "Seasons" : "Season"}`;
  return result;
}
