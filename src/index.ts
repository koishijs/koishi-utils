import CQCode from './cqCode'

export * from './chinese'
export * from './date'
export * from './observe'
export * from './random'
export * from './set'
export * from './string'

export { CQCode }

export function isInteger (source: any) {
  return typeof source === 'number' && Math.floor(source) === source
}

export async function sleep (milliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
