
            // SQLBasicsSimpleJOIN
            // https://www.codewars.com//kata/5802e32dd8c944e562000020
        
            SELECT p.id, p.name, isbn, price, company_id, c.name company_name
FROM products p
JOIN companies c ON p.company_id = c.id;
            