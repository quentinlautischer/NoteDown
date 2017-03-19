const parser = require('../../shared/parser.js');

test('image test 1', () => {
  const raw_str = '![image](url)';
  const rendered = '<p><img src="url" alt="image" title="" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('image test 2', () => {
  const raw_str = '![image](url "title")';
  const rendered = '<p><img src="url" alt="image" title="title" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('image test 3', () => {
  const raw_str = '![image][cite]\n\n\n[cite]: url';
  const rendered = '<p><img src="url" alt="image" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('image test 4', () => {
  const raw_str = '![image] [cite]\n\n\n[cite]: url';
  const rendered = '<p><img src="url" alt="image" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('image test 5', () => {
  const raw_str = '![image][cite]\n\n\n[CITE]: url';
  const rendered = '<p><img src="url" alt="image" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('image test 6', () => {
  const raw_str = '![image][]\n\n\n[image]: url';
  const rendered = '<p><img src="url" alt="image" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('image test 6', () => {
  const raw_str = '![image]\n\n\n[image]: url';
  const rendered = '<p><img src="url" alt="image" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});