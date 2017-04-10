const parser = require('../../shared/parser.js');

test('extract flashcards from pages, no pages', () => {
    const pages = [];
    const expected = [];

    expect(parser.extractFlashcards(pages)).toEqual(expected);
});

test('extract flashcards from pages, no flashcards', () => {
    const pages = [
        { _id: '1', content: 'Page 1', images: [] },
        { _id: '2', content: 'Page 2', images: [] }
    ];
    const expected = [];

    expect(parser.extractFlashcards(pages)).toEqual(expected);
});

test('extract flashcards from pages, first page', ()=> {
    const pages = [
        { _id: '1', content:
`There is a flashcard on this page.
{Question}
{Hint1|Hint2|Hint3}
{Step1|Step2|Step3}`,
          images: [] },
        { _id: '2', content: 'Page 2', images: [] }
    ];
    const expected = [{"front":"Question","back":["Step1","Step2","Step3"],"hints":["Hint1","Hint2","Hint3"], "rank": 2}];

    expect(parser.extractFlashcards(pages)).toEqual(expected);
});

test('extract flashcards from pages, last page', ()=> {
    const pages = [
        { _id: '1', content: 'Page 1', images: [] },
        { _id: '2', content:
`There is a flashcard on this page.
{Question}
{Hint1|Hint2|Hint3}
{Step1|Step2|Step3}`, images: [] }
    ];
    const expected = [{"front":"Question","back":["Step1","Step2","Step3"],"hints":["Hint1","Hint2","Hint3"], "rank": 2}];

    expect(parser.extractFlashcards(pages)).toEqual(expected);
});

test('extract flashcards from pages, single step', ()=> {
    const pages = [
        { _id: '1', content: 'Page 1', images: [] },
        { _id: '2', content:
`There is a flashcard on this page.
{Question}
{Hint1}
{Step1}`, images: [] }
    ];
    const expected = [{"front":"Question","back":["Step1"],"hints":["Hint1"], "rank": 2}];

    expect(parser.extractFlashcards(pages)).toEqual(expected);
});

test('extract flashcards from pages, empty flashcard template', ()=> {
    const pages = [
        { _id: '1', content: 'Page 1', images: [] },
        { _id: '2', content:
`{}
{}
{}`, images: [] }
    ];
    const expected = [];

    expect(parser.extractFlashcards(pages)).toEqual(expected);
});
