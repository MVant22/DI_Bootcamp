-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United Kingdom.1252'
--     LC_CTYPE = 'English_United Kingdom.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- EXERCISE 1 -- 
-- SELECT firstname, lastname FROM customers ORDER BY lastname OFFSET 3 LIMIT 2;

-- EXERCISE 2 -- 
-- DELETE FROM purchases WHERE customer_id IN 
-- (SELECT customer_id FROM customers WHERE firstname = 'Scott' AND lastname = 'Scott')

-- EXERCISE 3 -- 
-- SELECT * FROM customers WHERE firstname = 'Scott';

-- EXERCISE 4 -- 
SELECT 
    COALESCE(c.firstname, '') AS firstname,
    COALESCE(c.lastname, '') AS lastname,
    i.item_name
FROM purchases p
LEFT JOIN customers c 
    ON p.customer_id = c.customer_id
LEFT JOIN items i 
    ON p.item_id = i.item_id;


-- EXERCISE 5 -- 
-- SELECT customers.firstname, customers.lastname, items.item_name
-- FROM purchases 
-- INNER JOIN customers ON purchases.customer_id = customers.customer_id
-- INNER JOIN items ON purchases.item_id = items.item_id;
