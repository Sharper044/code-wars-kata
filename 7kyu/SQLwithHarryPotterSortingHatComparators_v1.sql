
            // SQLwithHarryPotterSortingHatComparators
            // https://www.codewars.com//kata/5abcf0f930488ff1a6000b66
        
            SELECT *
FROM students
WHERE
  (quality2 = 'cunning' AND quality1 = 'evil') OR
  (quality1 = 'brave' AND quality2 != 'evil') OR
  (quality1 = 'studious' OR quality2 = 'intelligent') OR
  (quality1 = 'hufflepuff' OR quality2 = 'hufflepuff');
            