export function range(n: number) {
  return [...Array(n).keys()];
}

export function truncate(str: string, maxLength = 35, endStrLength = 3) {
  if (str.length < maxLength) return str;

  return `${str.substring(0, maxLength - (endStrLength + 3))}..${str.substring(
    str.length - endStrLength,
    str.length
  )}`;
}
