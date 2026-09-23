const { topWords } = require('./solution');

const words = [
  'a',
  'able',
  'about',
  'absolute',
  'accept',
  'account',
  'achieve',
  'across',
  'act',
  'active',
  'actual',
  'add',
  'address',
  'Admit',
  'Advertise',
  'Affect',
  'AFFORD',
  'after',
  'afternoon',
  'again',
  'against',
  'age',
  'agent',
  'ago',
  'agree',
];

describe('topWords', () => {
  test('пример из условия: подходящих слов больше, чем limit', () => {
    expect(topWords(words, 'Af', 3)).toEqual(['Affect', 'AFFORD', 'after']);
  });

  test('пример из условия: подходящих слов меньше, чем limit', () => {
    expect(topWords(words, 'aga', 5)).toEqual(['again', 'against']);
  });

  test('поиск без учёта регистра, слова в исходном регистре', () => {
    expect(topWords(words, 'ABO', 10)).toEqual(['about']);
    expect(topWords(words, 'adm', 10)).toEqual(['Admit']);
  });

  test('подходящих слов ровно limit', () => {
    expect(topWords(words, 'ag', 6)).toEqual(['again', 'against', 'age', 'agent', 'ago', 'agree']);
  });

  test('слово должно начинаться с query, а не просто содержать его', () => {
    expect(topWords(words, 'count', 10)).toEqual([]);
  });

  test('запрос совпадает со словом целиком', () => {
    expect(topWords(words, 'act', 10)).toEqual(['act', 'active', 'actual']);
  });

  test('нет подходящих слов', () => {
    expect(topWords(words, 'xyz', 5)).toEqual([]);
  });

  test('limit равен 0', () => {
    expect(topWords(words, 'a', 0)).toEqual([]);
  });

  test('пустой массив слов', () => {
    expect(topWords([], 'a', 5)).toEqual([]);
  });

  test('пустой запрос подходит под любое слово', () => {
    expect(topWords(words, '', 3)).toEqual(['a', 'able', 'about']);
  });

  test('не изменяет входной массив', () => {
    const copy = [...words];
    topWords(words, 'Af', 3);
    expect(words).toEqual(copy);
  });
});
