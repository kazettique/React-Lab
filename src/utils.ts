export function getNumberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getNumberWithoutCommas(x: number | string) {
  return x.toString().replace(/,/g, '');
}

export const createArray = (count: number, start = 0, step = 1) => {
  return Array.from(Array(count).keys()).map((key, idx) => start + idx * step);
};
