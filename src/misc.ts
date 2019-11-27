export function noop () {}

export function isInteger (source: any) {
  return typeof source === 'number' && Math.floor(source) === source
}

export async function sleep (milliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
