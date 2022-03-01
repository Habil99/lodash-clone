let result = [];

export function concat<T>(array: T[], ...args: any): T[] {
  result = [...array];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (typeof arg !== "object") {
      result.push(arg);
    } else {
      for (const concatElement of arg) {
        concat(result, concatElement)
      }
    }
  }

  return result;
}
