export function toFa(n: number, minDigits = 1) {
  return n.toLocaleString("fa-IR", {
    useGrouping: false,
    minimumIntegerDigits: minDigits,
  });
}
