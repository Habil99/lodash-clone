type FalsyValue = (boolean | number | bigint | string | null | undefined | HTMLAllCollection);
type TruthValue<T> = Exclude<T, FalsyValue>

export function compact<T extends FalsyValue>(array: T[]): TruthValue<T>[] {
  const result: TruthValue<T>[] = [];
  let isFalsy: boolean;

  for (const item of array) {
    isFalsy = Boolean(item);
    if (isFalsy) {
      result.push(item as TruthValue<T>);
    }
  }

  return result;
}
