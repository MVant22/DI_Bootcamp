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

-- EXERCISES 3 --

-- EXERCISE 3.1.1 -- 

-- CREATE TABLE purchases (
-- 	purchases_id SERIAL PRIMARY KEY,
-- 	customer_id INTEGER,
-- 	item_id INTEGER,
-- 	quantity_purchased INTEGER,
-- 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
--  FOREIGN KEY (item_id) REFERENCES items(item_id)
-- );

-- EXERCISE 3.1.2 --

-- INSERT INTO purchases ( customer_id, item_id, quantity_purchased) 
-- VALUES 
-- 	(3, 3, 1),
-- 	(5,2 ,10),
-- 	(1,1,2);

-- EXERCISES 3.2.1 -- 
-- SELECT * FROM purchases;

-- EXERCISES 2.2.2 -- 
-- SELECT customers.lastname, customers.customer_id, purchases.quantity_purchased
-- FROM customers
-- INNER JOIN purchases ON customers.customer_id = purchases.customer_id;

-- EXERCISES 2.2.3 --
-- SELECT customer_id, purchases_id FROM purchases WHERE customer_id = 5;

-- EXERCISES 2.2.4 -- 
-- SELECT item_id FROM purchases WHERE item_id = 1 OR item_id = 2;

-- EXERCISES 2.2.2
-- SELECT customers.lastname, customers.firstname, items.item_name
-- FROM customers
-- INNER JOIN purchases ON customers.customer_id = purchases.customer_id
-- INNER JOIN items ON purchases.item_id = items.item_id;

-- EXERCISES 2.2.3.0
-- INSERT INTO purchases (customer_id, quantity_purchased)
-- VALUES (123, 1);
-- it violates foreign key constraint

