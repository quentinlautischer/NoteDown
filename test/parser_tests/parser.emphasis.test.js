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

test('emphasis test 4', () => {
  const raw_str = 'This __parses _left__ to_ right';
  const rendered = '<p>This <strong>parses </em>left</strong> to</em> right</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('emphasis test 5', () => {
  const raw_str = 'The __same __emphasis cannot__ be__ nested';
  const rendered = '<p>The <strong>same <em>_emphasis cannot</strong> be</em>_ nested</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('emphasis test 6', () => {
  const raw_str = 'The _same _emphasis cannot_ be_ nested';
  const rendered = '<p>The <em>same _emphasis cannot</em> be_ nested</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});