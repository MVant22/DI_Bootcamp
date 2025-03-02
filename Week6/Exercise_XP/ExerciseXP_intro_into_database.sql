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

-- EXERCISE --

-- CREATE TABLE customers (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	firstname VARCHAR(50) NOT NULL,
-- 	lastname VARCHAR(50) NOT NULL
-- );

-- SELECT * FROM customers

-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     item_name VARCHAR(50) NOT NULL,
--     price INT NOT NULL
-- );



-- INSERT INTO items (item_name, price)
-- VALUES 
--     ('Small Desk', 100),
--     ('Large Desk', 300),
--     ('Fan', 80);

-- EXERCISE 2 --

-- INSERT INTO customers (firstname, lastname)
-- VALUES 
-- 	('Greg ', 'Jones'),
-- 	('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor', 'Green'),
-- 	('Melanie', 'Johnson');

-- EXERCISE 3 --

-- SELECT * FROM items

-- SELECT item_name, price FROM items WHERE price > 80;

-- SELECT item_name, price FROM items WHERE price <= 300;

-- SELECT firstname, lastname FROM customers WHERE lastname = 'Smith';

-- SELECT firstname, lastname FROM customers WHERE lastname = 'Jones';

-- SELECT firstname, lastname FROM customers WHERE lastname != 'Scott';

	
