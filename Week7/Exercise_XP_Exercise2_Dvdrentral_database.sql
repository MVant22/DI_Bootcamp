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

---1
-- SELECT * FROM customer;

---2
-- SELECT (first_name, last_name) AS full_name FROM customer;

---3
-- SELECT DISTINCT create_date FROM customer;

---4
-- SELECT * FROM customer ORDER BY first_name DESC;

---5
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

---6
-- SELECT address, phone FROM address WHERE district = 'Texas';

---7
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

---8
-- SELECT title , description FROM film WHERE title = "Turn Wife";

---9
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'ta%' ;

---10
-- SELECT title, description FROM film ORDER BY replacement_cost ASC;

---11
-- SELECT title, description FROM film FETCH FIRST 5 ROWS ONLY;

---12
-- SElECT customer.first_name, customer.last_name, 
-- payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment ON payment.customer_id = customer.customer_id;

---13
-- SELECT title, film_id FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory);

---14
-- SELECT city,country_id FROM city WHERE country_id IN (SELECT country_id FROM city); 

---15
-- SELECT customer.customer_id, customer.first_name, customer.last_name, 
-- payment.amount, payment.payment_date, staff.staff_id
-- FROM ((customer
-- INNER JOIN payment ON payment.customer_id = customer.customer_id)
-- INNER JOIN staff ON payment.staff_id = staff.staff_id);

