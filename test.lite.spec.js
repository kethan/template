import lite from './lite/index.js';
import { expect, test } from 'vitest'
test('lite test', () => {
  expect(lite()).toBe("lite")
})