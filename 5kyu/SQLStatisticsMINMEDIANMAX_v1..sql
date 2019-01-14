
            // SQLStatisticsMINMEDIANMAX
            // https://www.codewars.com//kata/58167fa1f544130dcf000317
        
            SELECT MIN(score) AS min,
  ROUND(PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY score)::numeric, 2)::float AS median,
  MAX(score) AS max
FROM result;
            