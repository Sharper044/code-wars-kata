// RemoveZeros
// https://www.codewars.com//kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i] === 0 || array[i] === '0') {
      array = moveToEnd(array, i);
      len--;
      i--;
    }
  }
  return array;
}

function moveToEnd(array, index) {
  for (let i = index; i < array.length - 1; i++) {
    const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
  return array;
}
