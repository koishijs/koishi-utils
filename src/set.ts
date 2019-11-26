export function isSubset (array1: any[], array2: any[]) {
  return array1.every(item => array2.includes(item))
}

export function intersection <T> (array1: T[], array2: T[]) {
  return array1.filter(item => array2.includes(item))
}

export function complement <S> (array1: S[], array2: any[]) {
  return array1.filter(item => !array2.includes(item as any))
}

export function union <T> (array1: T[], array2: T[]) {
  return Array.from(new Set([...array1, ...array2]))
}
