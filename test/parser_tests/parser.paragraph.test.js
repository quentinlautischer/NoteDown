const parser = require('../../shared/parser.js');

test('paragraph test 1', () => {
  const raw_str = 'This is a paragraph';
  const rendered = '<p>This is a paragraph</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 2', () => {
  const raw_str = 'This is a  \nline break';
  const rendered = '<p>This is a<br />line break</p>';
  
  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 3', () => {
  const raw_str = 'This is some <em>span html</em>.';
  const rendered = '<p>This is some <em>span html</em>.</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 4', () => {
  const raw_str = 'This is a [link](url).';
  const rendered = '<p>This is a <a href="url">link</a>.</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 5', () => {
  const raw_str = 'This _is_ __emphasis__.';
  const rendered = '<p>This <em>is</em> <strong>emphasis</strong>.</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 6', () => {
  const raw_str = 'This is `code`.';
  const rendered = '<p>This is <code>code</code>.</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 7', () => {
  const raw_str = 'This is an ![image](url).';
  const rendered = '<p>This is <img src="url" alt="image" title="" />.</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('paragraph test 8', () => {
  const raw_str = 'This is an autolink: <http://www.google.com>.';
  const rendered = '<p>This is an autolink: <a href="http://www.google.com">http://www.google.com</a>.</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});