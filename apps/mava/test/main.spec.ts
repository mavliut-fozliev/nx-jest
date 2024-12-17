import { init } from '../src/main';

describe('main', () => {
  it('should return "Hello World"', () => {
    const result = init();
    expect(result).toBe('Hello World');
  });
});
