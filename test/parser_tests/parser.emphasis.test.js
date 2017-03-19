const parser = require('../../shared/parser.js');

test('emphasis test 1', () => {
  const raw_str = 'This _is_ __emphasized__';
  const rendered = '<p>This <em>is</em> <strong>emphasized</strong></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('emphasis test 2', () => {
  const raw_str = 'This _is __emphasized__';
  const rendered = '<p>This _is <strong>emphasized</strong></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('emphasis test 3', () => {
  const raw_str = 'This _is __ emphasized__';
  const rendered = '<p>This <em>is _</em> emphasized__</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});