import { parse, format } from "date-fns";

export default function convertDate(dateString) {
  if (!dateString) return null;

  const parseDate = parse(dateString, "yyyy-MM-dd", new Date());
  const formattedData = format(parseDate, "MMM dd, yyyy");

  return formattedData;
}
