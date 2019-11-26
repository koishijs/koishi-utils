export * from './chinese'
export * from './cqCode'
export * from './date'
export * from './random'
export * from './set'
export * from './string'

export function isInteger (source: any) {
  return typeof source === 'number' && Math.floor(source) === source
}

export async function sleep (milliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
