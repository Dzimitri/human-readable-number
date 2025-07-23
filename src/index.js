module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const digit = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const decimal = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let result = '';
  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;

  if (hundreds > 0) {
    result += `${digit[hundreds]} hundred`;
  }

  if (remainder > 0) {
    if (hundreds > 0) {
      result += ' ';
    }

    if (remainder < 20) {
      result += `${digit[remainder]}`;
    } else {
      const tens = Math.floor(remainder / 10);
      const ones = remainder % 10;
      result += `${decimal[tens]}`;
      if (ones > 0) {
        result += ` ${digit[ones]}`;
      }
    }
  }

  return result;
};
