const { shortestWord } = require('./solution');

describe('shortestWord', () => {
  test('пример из условия', () => {
    expect(shortestWord('lorem ipsum dolor sit amet')).toBe(3);
  });

  test('несколько самых коротких слов одной длины', () => {
    expect(shortestWord('bitcoin take over the world maybe who knows perhaps')).toBe(3);
  });

  test('апостроф считается частью слова', () => {
    expect(shortestWord("Let's travel abroad shall we")).toBe(2);
  });

  test('одно слово', () => {
    expect(shortestWord('algorithm')).toBe(9);
  });

  test('слово из одной буквы', () => {
    expect(shortestWord('I love JavaScript')).toBe(1);
  });

  test('самое короткое слово первое', () => {
    expect(shortestWord('a quick brown fox')).toBe(1);
  });

  test('самое короткое слово последнее', () => {
    expect(shortestWord('lorem ipsum dolor sit amet ok')).toBe(2);
  });

  test('все слова одной длины', () => {
    expect(shortestWord('cat dog owl')).toBe(3);
  });
});
