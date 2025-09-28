export default function convertSortUrl(string) {
  if (!string) return null;

  switch (string) {
    case "popularity-desc":
      return "popularity.desc";
    case "popularity-asc":
      return "popularity.asc";
    case "rating-desc":
      return "vote_average.desc";
    case "rating-asc":
      return "vote_average.asc";
    case "release-date-desc":
      return "primary_release_date.desc";
    case "release-date-asc":
      return "primary_release_date.asc";
    case "first-date-desc":
      return "first_air_date.desc";
    case "first-date-asc":
      return "first_air_date.asc";
  }
}
