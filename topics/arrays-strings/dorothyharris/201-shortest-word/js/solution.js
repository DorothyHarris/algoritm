/**
 * Возвращает длину самого короткого слова в строке str.
 *
 * @param {string} str слова, разделённые пробелом
 * @returns {number}
 */
function shortestWord(str) {
  const arr = str.split(" ");

  const length = arr.map((word) => word.length);

  return Math.min(...length);
}

module.exports = { shortestWord };
