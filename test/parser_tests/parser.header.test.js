const parser = require('../../shared/parser.js');

test('header test 1', () => {
  const raw_str = '# Header 1\n';
  const renderered = '<h1>Header 1</h1>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('header test 2', () => {
  const raw_str = '# Header 1\n';
  const renderered = '<h2>Header 2</h2>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});