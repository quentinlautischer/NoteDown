const parser = require('../../shared/parser.js');

test('list test 1', () => {
  const raw_str = '* 1\n* 2\n* 3';
  const rendered = '<ul><li>1</li><li>2</li><li>3</li></ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 2', () => {
  const raw_str = '+ 1\n+ 2\n+ 3';
  const rendered = '<ul><li>1</li><li>2</li><li>3</li></ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 3', () => {
  const raw_str = '- 1\n- 2\n- 3';
  const rendered = '<ul><li>1</li><li>2</li><li>3</li></ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 4', () => {
  const raw_str = '* 1\n\n* 2\n* 3';
  const rendered = '<ul><li><p>1</p></li><li><p>2</p></li><li>3</li></ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 5', () => {
  const raw_str = '+ 1\n\n+ 2\n+ 3';
  const rendered = '<ul><li><p>1</p></li><li><p>2</p></li><li>3</li></ul>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 6', () => {
  const raw_str = '- 1\n\n- 2\n- 3';
  const rendered = '<ul><li><p>1</p></li><li><p>2</p></li><li>3</li></ul>';

  expect(parser.parse(raw_str)).toBe(rendered);

});

test('list test 7', () => {
  const raw_str = '1. a\n2. 2b\n3. c';
  const rendered = '<ol><li>a</li><li>b</li><li>c</li></ol>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('list test 8', () => {
  const raw_str = '1. a\n\n2. b\n3. c';
  const rendered = '<ol><li><p>a</p></li><li><p>b</p></li><li>c</li></ol>';

  expect(parser.parse(raw_str)).toBe(rendered);
});