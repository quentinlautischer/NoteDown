const parser = require('../../shared/parser.js');

test('code test 1', () => {
  const raw_str = '`this is code`';
  const rendered = '<p><code>this is code</code></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('code test 2', () => {
  const raw_str = '```this ` is `` code```';
  const rendered = '<p><code>this ` is `` code</code></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('code test 3', () => {
  const raw_str = 'a`b``a`b``a`b``';
  const rendered = '<p>a<code>b``a</code>b<code>a`b</code></p>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('code test 4', () => {
  const raw_str = '    this\n    is\n\n    code';
  const rendered = '<pre><code>this\nis\n\ncode</code></pre>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});