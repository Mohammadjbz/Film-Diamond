export function convertTime(time) {
  const hours = Math.floor(time / 60);
  const min = time % 60;
  const result = `${hours} ${hours > 1 ? "hours" : "hour"} ${min} ${
    min > 1 ? "minutes" : "minute"
  }`;
  return result;
}
