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

const parseNumber = function (string) {
  let num = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9' && string[i] !== ' ') {
      num += string[i];
    }
  }
  return num;
};

parseNumber('2023 год');
parseNumber('ECMAScript 2022');
parseNumber('1 кефир, 0.5 батона');
parseNumber('агент 007');
parseNumber('а я томат');
parseNumber(-1);

// Task 3

const getStringLength = function (firstExpression, length, secondExpression) {
  if (firstExpression.length >= length) {
    return firstExpression;
  }
  if ((firstExpression.length + secondExpression.length) > length) {
    const restOfLength = length - firstExpression.length;
    const restOfSec = secondExpression.slice(0, restOfLength);

    return restOfSec + firstExpression;
  }
  if ((firstExpression.length + secondExpression.length) < length) {
    const restOfLength = length - firstExpression.length;
    const needTimesOfSecond = Math.floor(restOfLength / secondExpression.length);

    for (let i = 0; i < needTimesOfSecond; i++) {
      firstExpression = secondExpression + firstExpression;
    }

    if (firstExpression.length !== length) {
      const anotherLengthRest = length - firstExpression.length;
      firstExpression = secondExpression.slice(0, anotherLengthRest) + firstExpression;
    }
    return firstExpression;
  }

  if ((firstExpression.length + secondExpression.length) === length) {

    return secondExpression + firstExpression;
  }
};


getStringLength('1', 2, '0');
getStringLength('1', 4, '0');
getStringLength('q', 4, 'werty');
getStringLength('q', 4, 'we');
getStringLength('qwerty', 4, '0');

// Task 4

function checkStringMaxLength (expression, length) {
  if (expression.length <= length) {
    return true;
  } {
    return false;
  }
}

// test1234

checkStringMaxLength('проверяемая строка', 20);
checkStringMaxLength('проверяемая строка', 18);
checkStringMaxLength('проверяемая строка', 10);
