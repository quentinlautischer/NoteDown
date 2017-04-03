const parser = require('../../shared/parser.js');

test('html test 1', () => {
  const raw_str = '<div></div>test';
  const rendered = '<p><div></div>test</p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('html test 2', () => {
  const raw_str = 'test<div></div>';
  const rendered = '<p>test<div></div></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('html test 3', () => {
  const raw_str = '<div>test</div>';
  const rendered = '<p><div>test</div></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('html test 4', () => {
  const raw_str = '<img src="url" title="__formatting__ ``formatting`` *formatting*" />';
  const rendered = '<p><img src="url" title="__formatting__ ``formatting`` *formatting*" /></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('html test 5', () => {
  const raw_str = '<a href="url" title="__formatting__ ``formatting`` *formatting*">smthg</a>';
  const rendered = '<p><a href="url" title="__formatting__ ``formatting`` *formatting*">smthg</a></p>';

  expect(parser.parse(raw_str)).toBe(rendered);
});