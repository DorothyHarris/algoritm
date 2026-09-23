# algoritm

Учебный репозиторий: решаем задачи на разные темы и на разных языках. Работает несколько человек.
Имена папок и файлов — на английском, тексты (условия, заметки, ченджлог) — на русском.

## Структура

```
topics/<тема>/<ник>/<номер>-<задача>/
  README.md        # условие и заметки
  CHANGELOG.md     # что сделано и комментарии
  <язык>/
    solution.<ext>
    solution.test.<ext>
```

Например:

```
topics/arrays/dorothyharris/1-two-sum/README.md
topics/arrays/dorothyharris/1-two-sum/CHANGELOG.md
topics/arrays/dorothyharris/1-two-sum/js/solution.js
topics/arrays/dorothyharris/1-two-sum/js/solution.test.js
topics/strings/dorothyharris/1-valid-anagram/py/solution.py
```

Чтобы не было конфликтов, у каждого своя папка `<ник>` внутри темы. Свою папку правит только владелец, чужие не трогаем.

## Как называть

- **`<ник>`** — ваш GitHub username в нижнем регистре: `dorothyharris`.
- **`<тема>`** — `kebab-case`, обычно во множественном числе. Уже есть: `arrays`, `strings`, `hash-maps`, `linked-lists`, `stacks-queues`, `trees`, `graphs`, `sorting`, `searching`, `recursion`, `dynamic-programming`, `greedy`, `math`. Нужна новая — просто создайте папку.
- **`<номер>-<задача>`** — `1-two-sum`. Номер ваш личный: первая задача в теме — `1`, вторая — `2` и так далее, номера не переиспользуются. Название английское, `kebab-case`. Чужие решения той же задачи ищите по названию: `topics/*/*/*-two-sum`.
- **`<язык>`** — короткий код, новый язык добавляется просто новой папкой:

| Язык | Папка | Решение | Тест |
|---|---|---|---|
| JavaScript | `js` | `solution.js` | `solution.test.js` (Jest) |
| TypeScript | `ts` | `solution.ts` | `solution.test.ts` (Jest) |
| Python | `py` | `solution.py` | `test_solution.py` |
| Java | `java` | `Solution.java` | `SolutionTest.java` |
| Go | `go` | `solution.go` | `solution_test.go` |

Решение — чистая функция, названная как задача в стиле языка (`twoSum`, `two_sum`), она ничего не читает и не печатает. Если подходов несколько, основной остаётся `solution`, остальные получают суффикс: `solution.brute-force.js`.

## README и CHANGELOG задачи

`README.md`: название, ссылка на источник, сложность, статус, условие, примеры и ваши заметки (идея, сложность по времени и памяти). Образец: [Two Sum](topics/arrays/dorothyharris/1-two-sum/README.md).

`CHANGELOG.md`: записи от новых к старым, у каждой дата. Пишем, что сделано и что было непонятно или не получилось:

```markdown
## 2026-09-21
- Переписал на хеш-таблицу, старый перебор оставил как `solution.brute-force.js`.
- Комментарий: сначала забыл про дубликаты, поймал на тесте.

## 2026-09-20
- Добавил решение перебором и тесты.
```

## Тесты

- Для JS и TS пишем тесты на **Jest**, файл лежит рядом с решением.
- Писать тесты самим не обязательно: можно попросить Claude, например «напиши тесты на Jest для 2-valid-anagram». Лучше сначала заполнить условие и примеры в README задачи.
- Хорошо, если тесты покрывают примеры из условия и крайние случаи: пустой ввод, один элемент, отрицательные числа, дубликаты.
- Один раз выполнить `npm install`, дальше из корня: `npm test` (все тесты) или `npx jest topics/arrays/<ник>/1-two-sum` (одна задача).
- Для TypeScript при первом использовании понадобится `ts-jest`, попросите Claude настроить.

## Git

- Ветка: `<ник>/<тема>/<задача>`, например `dorothyharris/arrays/two-sum`. Общие изменения (README, `package.json`) делаем в ветке `chore/...`.
- В коммитах трогаем только свою папку `<ник>`.
- Перед началом работы: `git pull --rebase origin develop`, готовое — PR в `develop`.

## Новая задача

1. Создать `topics/<тема>/<ник>/<номер>-<задача>/` (следующий свободный номер в теме).
2. Скопировать `README.md` и `CHANGELOG.md` из готовой задачи и заполнить.
3. Добавить `<язык>/solution.<ext>` и тесты.
4. Записать в `CHANGELOG.md`, что сделано.
