import * as stuff from './stuff';

it('import * as stuff from ./directory', () => {
  expect(stuff.one).toBe('one');
  expect(stuff.two).toBe('two');
});
