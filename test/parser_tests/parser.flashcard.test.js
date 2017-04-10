const parser = require('../../shared/parser.js');

test('flashcard test 1', () => {
  const blocks = [{content:['{Question}','{Hint 1|Hint 2}','{Answer}']}];
  const expected_output = [{content: []}, {content: []}];
  const flashcard = {tag:'div', content:parser.makeFlashcard('Question', ['Answer'], ['Hint 1', 'Hint 2'], 2)};
  expected_output.splice(1, 0, flashcard);
  parser.check_flashcard(blocks);

  expect(blocks).toEqual(expected_output);
});

test('flashcard test 2', () => {
  const blocks = [{content:['{Qu<em>esti</em>on}','{``Hint 1``|Hint [2](url)}','{A_n_s__we__r}']}];
  const expected_output = [{content: []}, {content: []}];
  const flashcard = {tag:'div', content:parser.makeFlashcard('Qu<em>esti</em>on', ['A<em>n</em>s<strong>we</strong>r'], ['<code>Hint 1</code>', 'Hint <a href="url">2</a>'], 2)};
  expected_output.splice(1, 0, flashcard);
  parser.check_flashcard(blocks);

  expect(blocks).toEqual(expected_output);
});

test('flashcard test 3', () => {
  const blocks = [{content:['{Question}','{Hint 1|<http://www.google.com>}','{Step 1|Step 2}']}];
  const expected_output = [{content: []}, {content: []}];
  const flashcard = {tag:'div', content:parser.makeFlashcard('Question', ['Step 1', 'Step 2'], ['Hint 1', '<a href="http://www.google.com">http://www.google.com</a>'], 2)};
  expected_output.splice(1, 0, flashcard);
  parser.check_flashcard(blocks);

  expect(blocks).toEqual(expected_output);
});

test('flashcard test 4', () => {
  const blocks = [{content:['{Question|RAnK:1}','{Hint 1|Hint 2}','{Answer}']}];
  const expected_output = [{content: []}, {content: []}];
  const flashcard = {tag:'div', content:parser.makeFlashcard('Question', ['Answer'], ['Hint 1', 'Hint 2'], 1)};
  expected_output.splice(1, 0, flashcard);
  parser.check_flashcard(blocks);

  expect(blocks).toEqual(expected_output);
});

test('flashcard test 5', () => {
  const blocks = [{content:['{Question|Rank:40}','{Hint 1|Hint 2}','{Answer}']}];
  const expected_output = [{content: []}, {content: []}];
  const flashcard = {tag:'div', content:parser.makeFlashcard('Question', ['Answer'], ['Hint 1', 'Hint 2'], 2)};
  expected_output.splice(1, 0, flashcard);
  parser.check_flashcard(blocks);

  expect(blocks).toEqual(expected_output);
});