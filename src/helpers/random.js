export const randomInteger = (min = 1, max = 10000000) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}