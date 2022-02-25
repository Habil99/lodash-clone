export function chunk<T>(array: T[], size: number): T[] {
  const result: any[] = [];
  const n: number = array.length;
  const numberOfDividedArrays = Math.floor(n / size) + (n % size);

  if (n <= size) {
    return array;
  }

  for (let j = 0; j < numberOfDividedArrays; j++) {
    const count: number = result[j - 1] ? result.length * size : 0;
    result[j] = array.slice(count, count + size);
  }

  return result;
}
