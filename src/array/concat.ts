let result = [];

export function concat<T, P>(array: T[], ...args: any[]): T[] {
  result = [...array]
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (typeof arg !== "object") {
      result.push(arg);
    } else {
      concat(result, arg[0]);
    }
  }

  return result;
}
