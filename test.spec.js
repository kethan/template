import full from './src/index.js';
import { expect, test } from 'vitest'
test('full test', () => {
  expect(full()).toBe("full")
})