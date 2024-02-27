// Task 1

const isPalindrome = function (string) {
  const normilizedString = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < normilizedString.length; i++) {
    if (normilizedString[i] !== normilizedString[normilizedString.length - 1 - i]) {

      return false;
    }

  }

  return true;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// Task 2

const isNumber = function (string) {
  if (typeof string === 'number') {
    string = string.toString();
  }
  let num = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9' && string[i] !== ' ') {
      num += string[i];
    }
  }
  return num;
};

isNumber('2023 год');
isNumber('ECMAScript 2022');
isNumber('1 кефир, 0.5 батона');
isNumber('агент 007');
isNumber('а я томат');
isNumber(-1);

// Task 3

const lengthString = function (first, length, second) {
  if (first.length >= length) {

    return first;
  }
  if ((first.length + second.length) > length) {
    const restOfLength = length - first.length;
    const restOfSec = second.slice(0, restOfLength);

    return restOfSec + first;
  }
  if ((first.length + second.length) < length) {
    const restOfLength = length - first.length;
    const needTimesOfSecond = Math.floor(restOfLength / second.length);

    for (let i = 0; i < needTimesOfSecond; i++) {
      first = second + first;
    }

    if (first.length !== length) {
      const anotherLengthRest = length - first.length;
      first = second.slice(0, anotherLengthRest) + first;
    }

    return first;
  }

  if ((first.length + second.length) === length) {

    return second + first;
  }
};


lengthString('1', 2, '0');
lengthString('1', 4, '0');
lengthString('q', 4, 'werty');
lengthString('q', 4, 'we');
lengthString('qwerty', 4, '0');

// Task 4

function isLength (first, length) {
  if (first.length <= length) {
    return true;
  } {
    return false;
  }
}

// test1234

isLength('проверяемая строка', 20);
isLength('проверяемая строка', 18);
isLength('проверяемая строка', 10);
