const parser = require('../../shared/parser.js');

test('blockhtml test 1', () => {
  const raw_str = '<div><div>&</div></div>';

  expect(parser.parse(raw_str)).toBe(raw_str);
});

test('blockhtml test 2', () => {
  const raw_str = '<div><div>&</p></p>';
  const rendered = '<p><div><div>&amp;</p></p></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});