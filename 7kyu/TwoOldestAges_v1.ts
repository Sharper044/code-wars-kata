
              // TwoOldestAges
              // https://www.codewars.com//kata/511f11d355fe575d2c000001
        
              // return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
  let ageArr: number[] = ages.slice();
  ageArr.sort((a, b) => a - b);
  return ageArr.slice(-2);
}
            