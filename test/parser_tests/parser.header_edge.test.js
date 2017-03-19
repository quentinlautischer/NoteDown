const parser = require('../../shared/parser.js');

test('setext header edge test 1', () => {
  const raw_str = '# Header 1\n-----';
  const rendered = '<h2># Header 1</h2>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 2', () => {
  const raw_str = '> Header 1\n-----';
  const rendered = '<h2>> Header 1</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 3', () => {
  const raw_str = '* Header 1\n-----';
  const rendered = '<h2>* Header 1</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 4', () => {
  const raw_str = '+ Header 1\n-----';
  const rendered = '<h2>+ Header 1</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 5', () => {
  const raw_str = '- Header 1\n-----';
  const rendered = '<h2>- Header 1</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 6', () => {
  const raw_str = '1. Header 1\n-----';
  const rendered = '<h2>1. Header 1</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 7', () => {
  const raw_str = '    Header 1\n-----';
  const rendered = '<h2>    Header 1</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 8', () => {
  const raw_str = '=====\n=====';
  const rendered = '<h1>=====</h1>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 9', () => {
  const raw_str = '[link](url)\n=====';
  const rendered = '<h1><a href="url">link</a></h1>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 10', () => {
  const raw_str = '[link][cite]\n=====\n\n[cite]: url';
  const rendered = '<h1><a href="url">link</a></h1>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 11', () => {
  const raw_str = 'normal __bold__ _italic_\n=====';
  const rendered = '<h1>normal <strong>bold</strong> <em>italic</em></h1>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 12', () => {
  const raw_str = 'normal `code`\n=====';
  const rendered = '<h1>normal <code>code</code></h1>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header edge test 13', () => {
  const raw_str = '![link](url)\n=====';
  const rendered = '<h1><img src="url" alt="link" title="" /></h1>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header edge test 1', () => {
  const raw_str = '# [link](url)';
  const rendered = '<h1><a href="url">link</a></h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header edge test 2', () => {
  const raw_str = '# [link][cite]\n\n[cite]: url';
  const rendered = '<h1><a href="url">link</a></h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header edge test 3', () => {
  const raw_str = '# normal __bold__ _italic_';
  const rendered = '<h1>normal <strong>bold</strong> <em>italic</em></h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header edge test 4', () => {
  const raw_str = '# normal `code`';
  const rendered = '<h1>normal <code>code</code></h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header edge test 5', () => {
  const raw_str = '# ![link](url)';
  const rendered = '<h1><img src="url" alt="link" title="" /></h1>';
  expect(parser.parse(raw_str)).toBe(rendered);
});