export function editDistance (str1: string, str2: string) {
  let lastRow = new Array(str2.length + 1).fill(0).map((_, index) => index)
  for (let i = 1; i <= str1.length; ++ i) {
    const thisRow = [i]
    for (let j = 1; j <= str2.length; ++ j) {
      thisRow.push(Math.min(
        thisRow[j - 1] + 1,
        lastRow[j] + 1,
        lastRow[j - 1] + Number(str1[i - 1] !== str2[j - 1]),
      ))
    }
    lastRow = thisRow
  }
  return lastRow[str2.length]
}

export function findSimilar (target: string) {
  return (name: string) => name.length > 2 && editDistance(name, target) <= name.length * 0.4
}

function deepen (modifyString: (source: string) => string) {
  function modifyObject <T> (source: T): T {
    if (typeof source !== 'object' || !source) return source
    if (Array.isArray(source)) return source.map(modifyObject) as any
    const result = {} as T
    for (const key in source) {
      result[modifyString(key)] = modifyObject(source[key])
    }
    return result
  }

  return function <T> (source: T): T {
    if (typeof source === 'string') {
      return modifyString(source) as any
    } else {
      return modifyObject(source)
    }
  }
}

export const camelCase = deepen(source => source.replace(/[_-][a-z]/g, str => str.slice(1).toUpperCase()))
export const paramCase = deepen(source => source.replace(/[A-Z]/g, str => '-' + str.toLowerCase()))
export const snakeCase = deepen(source => source.replace(/[A-Z]/g, str => '_' + str.toLowerCase()))
