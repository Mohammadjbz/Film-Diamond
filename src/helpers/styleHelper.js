import percentage from "./calculatePercentage";

export default function getColor(vote) {
  const percentageValue = percentage(vote);

  if (percentageValue === "N/R")
    return `conic-gradient(#acaba9 0% 100%)`;
  if (percentageValue > 0 && percentageValue < 45)
    return `conic-gradient(red 0% ${percentageValue}%,#acaba9 ${percentageValue}% 100%)`;
  if (percentageValue >= 45 && percentageValue < 70)
    return `conic-gradient(#f5c62b 0% ${percentageValue}%,#acaba9 ${percentageValue}% 100%)`;
  if (percentageValue >= 70)
    return `conic-gradient(green 0% ${percentageValue}%,#acaba9 ${percentageValue}% 100%)`;

  return null;
}
