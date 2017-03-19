const parser = require('../../shared/parser.js');

test('link test 1', () => {
  const raw_str = '[link](url)';
  const rendered = '<p><a href="url">link</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 2', () => {
  const raw_str = '[link](url "title")';
  const rendered = '<p><a href="url" title="title">link</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 3', () => {
  const raw_str = '[link][cite]\n\n\n[cite]: url';
  const rendered = '<p><a href="url">link</a></p>\n\n\n';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 4', () => {
  const raw_str = '[link] [cite]\n\n\n[cite]: url';
  const rendered = '<p><a href="url">link</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 5', () => {
  const raw_str = '[link][cite]\n\n\n[CITE]: url';
  const rendered = '<p><a href="url">link</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 6', () => {
  const raw_str = '[link][]\n\n\n[link]: url';
  const rendered = '<p><a href="url">link</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 7', () => {
  const raw_str = '[link]\n\n\n[link]: url';
  const rendered = '<p><a href="url">link</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('link test 8', () => {
  const raw_str = '<http://www.google.com>';
  const rendered = '<p><a href="http://www.google.com">http://www.google.com</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});