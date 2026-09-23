# Changelog

## 2026-09-23
- Решение: `split(" ")` → длины слов через `map` → `Math.min(...length)`.
- Комментарий: `Math.min(...arr)` может переполнить стек на огромном вводе. Проверено: в Node 22 на 200 000 слов падает с `RangeError: Maximum call stack size exceeded`, на 100 000 ещё работает.
- Создала задачу: условие, заготовка `js/solution.js` и тесты на Jest `js/solution.test.js`.
- Условие в README заменила на своё, тест «пример из условия» теперь проверяет `"lorem ipsum dolor sit amet"` → `3`.
- Запуск тестов из корня репозитория: `npx jest topics/arrays-strings/dorothyharris/201-shortest-word`.
