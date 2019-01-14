
              // ValidParentheses
              // https://www.codewars.com//kata/52774a314c2333f0a7000688
        
              package kata

import (
  "strings"
)

func ValidParentheses(parens string) bool {
  str := parens
  for ; strings.Contains(str, "()"); {
    str = strings.Join(strings.Split(str, "()"), "")
  }
  return len(str) == 0
}
            