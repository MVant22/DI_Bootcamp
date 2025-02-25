-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United Kingdom.1252'
--     LC_CTYPE = 'English_United Kingdom.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


--EXERCISE 1.1
-- SELECT title, description, rating FROM film ORDER BY rating ;

--EXERCISE 1.2
-- SELECT title, rating FROM film WHERE rating = 'G' OR rating = 'PG-13';

--EXERCISE 1.2.1
-- SELECT title, length, rental_rate FROM film WHERE length <= 120 AND rental_rate <= 3.00;

--EXERCISE 3
-- UPDATE customer SET first_name = 'Jared-marmoush' WHERE first_name = 'Jared';

--EXERCISE 4
-- UPDATE address SET address = '1003 Qinhuangdao Street' WHERE address = '1003 Beau-Bassin Street';



