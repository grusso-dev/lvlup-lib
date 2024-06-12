import { describe, expect, it } from 'vitest'

import { fn } from '..'
describe('Testfn', () => {
  it('shout return string', () => {
    const result = fn('Hola')
    expect(result).toEqual('Hola')
  })
})
