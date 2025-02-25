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


-- Exercise 1 --
-- UPDATE film
-- SET language_id = (
-- 	SELECT language_id FROM language WHERE name = 'English'
-- )
-- WHERE film_id = 1;


-- Exercise 2 -- 
-- foreign key in customer table: store_id, address_id

-- Exercise 3 -- 
-- DROP TABLE customer_review;

-- Exercise 4 -- 
-- SELECT rental_date, return_date FROM rental WHERE return_date > rental_date;

-- Exercise 5 -- 
-- SELECT rental.rental_id, film.film_id, inventory.film_id, film.title, 
-- rental.rental_date, rental.return_date, film.rental_rate
-- FROM ((rental
-- INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id)
-- INNER JOIN film ON inventory.film_id = film.film_id) 
-- WHERE rental.rental_date < rental.return_date ORDER BY rental_rate LIMIT 30;

-- SELECT * FROM film WHERE description ILIKE '%sumo wrestler%';

-- Exercise 6.1 --
-- SELECT film.film_id, film_actor.actor_id, film.title, film.description, actor.first_name, actor.last_name 
-- FROM ((film
-- INNER JOIN film_actor ON film.film_id = film_actor.actor_id)
-- INNER JOIN actor ON film.film_id = actor.actor_id)
-- WHERE description ILIKE '%sumo wrestler%' AND last_name = 'Penelope' AND first_name = 'Monroe';

-- Exercise 6.2 -- 
-- SELECT title, description, length, rating FROM film WHERE length < 60 AND rating = 'R';

-- Exercise 6.3 -- 
-- SELECT inventory.film_id, rental.rental_date, rental.return_date, payment.amount
-- FROM ((inventory
-- INNER JOIN rental ON inventory.film_id = rental.rental_id)
-- INNER JOIN payment ON inventory.film_id = payment.payment_id)
-- WHERE amount = 4;

-- Exercise 6.4 -- 
-- SELECT title, description, replacement_cost FROM film 
-- WHERE description ILIKE '%boat%' OR title ILIKE '%boat%' 
-- AND replacement_cost > 25 ORDER BY replacement_cost;







