
            // ValidParentheses
            // https://www.codewars.com//kata/52774a314c2333f0a7000688
        
            function validParentheses(parens){
  let str = parens;
  do {
    str = str.split('()').join('')
  } while (str.indexOf('()') >= 0);
  return str.length == 0;
}
            