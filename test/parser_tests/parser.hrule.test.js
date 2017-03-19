const parser = require('../../shared/parser.js');

test('hrule test 1', () => {
  const raw_str = '*****';
  const rendered = '<hr />';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('hrule test 2', () => {
  const raw_str = '* * * * *';
  const rendered = '<hr />';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('hrule test 3', () => {
  const raw_str = '*  *  *  *  *';
  const rendered = '<hr />';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('hrule test 4', () => {
  const raw_str = '-----';
  const rendered = '<hr />';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('hrule test 5', () => {
  const raw_str = '- - - - -';
  const rendered = '<hr />';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('hrule test 6', () => {
  const raw_str = '-  -  -  -  -';
  const rendered = '<hr />';

  expect(parser.parse(raw_str)).toBe(rendered);
});