const parser = require('../../shared/parser.js');

test('list test 1', () => {
  const raw_str = '* 1\n* 2\n* 3';
  const rendered = '<ul><li><p>1</p></li>\n<li><p>2</p></li>\n<li><p>3</p></li>\n</ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 2', () => {
  const raw_str = '+ 1\n+ 2\n+ 3';
  const rendered = '<ul><li><p>1</p></li>\n<li><p>2</p></li>\n<li><p>3</p></li>\n</ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 3', () => {
  const raw_str = '- 1\n- 2\n- 3';
  const rendered = '<ul><li><p>1</p></li>\n<li><p>2</p></li>\n<li><p>3</p></li>\n</ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 4', () => {
  const raw_str = '* 1\n\n* 2\n* 3';
  const rendered = '<ul><li><p>1</p></li>\n<li><p>2</p></li>\n<li><p>3</p></li>\n</ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 5', () => {
  const raw_str = '+ 1\n\n+ 2\n+ 3';
  const rendered = '<ul><li><p>1</p></li>\n<li><p>2</p></li>\n<li><p>3</p></li>\n</ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 6', () => {
  const raw_str = '- 1\n\n- 2\n- 3';
  const rendered = '<ul><li><p>1</p></li>\n<li><p>2</p></li>\n<li><p>3</p></li>\n</ul>';

  expect(parser.parse(raw_str)).toBe(rendered);

});

test('list test 7', () => {
  const raw_str = '1. a\n2. b\n3. c';
  const rendered = '<ol><li><p>a</p></li>\n<li><p>b</p></li>\n<li><p>c</p></li>\n</ol>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 8', () => {
  const raw_str = '1. a\n\n2. b\n3. c';
  const rendered = '<ol><li><p>a</p></li>\n<li><p>b</p></li>\n<li><p>c</p></li>\n</ol>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 9', () => {
  const raw_str = '1. a\n5. b\n1000000. c';
  const rendered = '<ol><li><p>a</p></li>\n<li><p>b</p></li>\n<li><p>c</p></li>\n</ol>';

  expect(parser.parse(raw_str)).toBe(rendered);
});