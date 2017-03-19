const parser = require('../../shared/parser.js');

test('setext header test 1', () => {
  const raw_str = 'Header 1\n=====';
  const rendered = '<h1>Header 1</h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('setext header test 2', () => {
  const raw_str = 'Header 2\n-----';
  const rendered = '<h2>Header 2</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header test 1', () => {
  const raw_str = '# Header 1';
  const rendered = '<h1>Header 1</h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header test 2', () => {
  const raw_str = '## Header 2';
  const rendered = '<h2>Header 2</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header test 3', () => {
  const raw_str = '### Header 3';
  const rendered = '<h3>Header 3</h3>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header test 4', () => {
  const raw_str = '#### Header 4';
  const rendered = '<h4>Header 4</h4>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header test 5', () => {
  const raw_str = '##### Header 5';
  const rendered = '<h5>Header 5</h5>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('atx header test 6', () => {
  const raw_str = '###### Header 6';
  const rendered = '<h6>Header 6</h6>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});