// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let ageArr = ages.slice();
  ageArr.sort((a, b) => a - b);
  return ageArr.slice(-2);
}