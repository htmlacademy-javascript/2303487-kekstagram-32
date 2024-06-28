/*  Задача 1

 Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
 и максимальную длину и возвращает true, если строка меньше или равна указанной длине,
 и false, если строка длиннее. Эта функция нам пригодится для валидации формы.

*/

const checkString = function (string, maxLength) {
  return (string.length <= maxLength);
}

checkString ('проверяемая строка проверяемая строка проверяемая строка проверяемая строка проверяемая строка проверяемая строка проверяемая строка', 10);
//checkString ('проверяемая строка', 30);
//checkString ('проверяемая строка', 20);
//checkString('проверяемая строка', 18);
//checkString ('проверяемая строка', 10);

// Задача 2

const tenet = function (string) {
  const noSpaces = string.replaceAll(' ', '');
  const result = noSpaces.toUpperCase();
  let newString = '';
  for (let i = result.length - 1; i >= 0; i--) {
    newString += result[i];
  }
  return result === newString;
}


tenet ('довод')

// Задача 3
// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
//и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const stringNumber = function (checkingString) {
  const result = checkingString.toString();
  let resultCount = '';
  for (let i = 0; i <= result.length - 1; i++) {
    const checkedChar = parseInt(result[i], 10);
    if (!Number.isNaN(checkedChar)) {
      resultCount += checkedChar;
    }
  }
  return parseInt(resultCount, 10);
};

stringNumber ('а я иду 2096')
