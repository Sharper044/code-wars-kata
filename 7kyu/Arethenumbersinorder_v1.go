
              // Arethenumbersinorder
              // https://www.codewars.com//kata/56b7f2f3f18876033f000307
        
              package kata

func InAscOrder(numbers []int) bool {
  if len(numbers) == 1 {
    return true
  } else {
    for i := 1; i < len(numbers); i++ {
      if numbers[i-1] > numbers[i] {
        return false
      }
    }
    return true
  }
}

            