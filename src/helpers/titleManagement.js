export default function titleManagement(title) {
  if(!title) return null;
  
  const splitting = title.split(" ");

  const result =
    splitting.length > 12 ? `${splitting.slice(0, 13).join(" ")} ...` : title;

  return result;
}
