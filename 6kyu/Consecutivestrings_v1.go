
              // Consecutivestrings
              // https://www.codewars.com//kata/56a5d994ac971f1ac500003e
        
              package kata

func LongestConsec(strarr []string, k int) string {
    if(len(strarr) == 0 || k > len(strarr) || k <= 0) {
    return ""
  }
  
  nums := make([]int, 0)
  for _, st := range strarr {
    nums = append(nums, len(st))
  }
  
  results := make([]int, 0)
  num := 0;
  
  for i := 0; i < (len(nums) - k + 1); i++ {
    num = 0
    for j := 0; j < k; j++ {
      num += nums[i+j];
    }
    results = append(results, num);
  }
  
  index := 0;
  
  for i := 0; i < len(results); i++ {
    if results[i] > results[index] {
      index = i;
    }
  }
  
  str := "";
  
  for i := index; i < (index + k); i++ {
    str += strarr[i];
  }
  
  return str;
}
            