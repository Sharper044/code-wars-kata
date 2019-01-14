
            // SQLwithSailorMoonThinkingaboutJOINs
            // https://www.codewars.com//kata/5ab7a736edbcfc8e62000007
        
            SELECT sa.senshi_name AS sailor_senshi, sa.real_name_jpn AS real_name, c.name AS cat, sc.school
FROM sailorsenshi AS sa
LEFT JOIN cats AS c
ON sa.cat_id = c.id
LEFT JOIN schools AS sc
ON sa.school_id = sc.id;
            