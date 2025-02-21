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

-- SELECT * FROM customers;

-- SELECT * FROM items;

-- SELECT item_name, price FROM items ORDER BY price ASC;

-- SELECT item_name, price FROM items WHERE price >= 80 ORDER BY price DESC;

-- SELECT firstname, lastname FROM customers ORDER BY firstname LIMIT 3;

-- SELECT lastname FROM customers ORDER BY lastname DESC;