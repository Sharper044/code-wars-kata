
            // SQLBasicsGroupByDay
            // https://www.codewars.com//kata/5811597e9d278beb04000038
        
            SELECT created_at::timestamp::date as day, description, COUNT(description) as count
FROM events
WHERE name = 'trained'
GROUP BY description, created_at::timestamp::date
ORDER BY created_at::timestamp::date;
            