const { twoSum } = require('./solution');

// Порядок индексов в ответе не важен, поэтому сортируем перед сравнением.
const sorted = (indices) => [...indices].sort((a, b) => a - b);

describe('twoSum', () => {
  test('пример из условия', () => {
    expect(sorted(twoSum([2, 7, 11, 15], 9))).toEqual([0, 1]);
  });

  test('нельзя использовать один элемент дважды', () => {
    expect(sorted(twoSum([3, 2, 4], 6))).toEqual([1, 2]);
  });

  test('одинаковые значения на разных индексах', () => {
    expect(sorted(twoSum([3, 3], 6))).toEqual([0, 1]);
  });

  test('отрицательные числа', () => {
    expect(sorted(twoSum([-1, -2, -3, -4, -5], -8))).toEqual([2, 4]);
  });

  test('ноль и нулевая сумма', () => {
    expect(sorted(twoSum([0, 4, 3, 0], 0))).toEqual([0, 3]);
  });

  test('ответ в конце массива', () => {
    expect(sorted(twoSum([1, 2, 3, 4, 5, 6], 11))).toEqual([4, 5]);
  });

  test('не изменяет входной массив', () => {
    const nums = [2, 7, 11, 15];
    twoSum(nums, 9);
    expect(nums).toEqual([2, 7, 11, 15]);
  });
});
