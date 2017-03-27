const parser = require('../../shared/parser.js');
//To be updated when flashcard structure is decided
test('flashcard test 1', () => {
  const raw_str = '{{Question}{Hint 1}{Hint 2}{Answer}}';
  const rendered = '<div>Flashcard placeholder<br />Question<br />Hint 1<br />Hint 2<br />Answer</div>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('flashcard test 2', () => {
  const raw_str = '{{Qu<em>esti</em>on}{Hint  \n1}{Hint [2](url)}{A_n_s__we__r}}';
  const rendered = '<div>Flashcard placeholder<br />Qu<em>esti</em>on<br />Hint<br />1<br />Hint <a href="url">2</a><br />A<em>n</em>s<strong>we</strong>r</div>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('flashcard test 3', () => {
  const raw_str = '{{Question}{Hint 1}{<http://www.google.com>}{Answer}}';
  const rendered = '<div>Flashcard placeholder<br />Question<br /><a href="http://www.google.com">http://www.google.com</a><br />Hint 2<br />Answer</div>';

  expect(parser.parse(raw_str)).toBe(rendered);
});