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

-- Exercise 1.1 -- 
-- SELECT rental_id FROM rental WHERE inventory_id NOT IN (SELECT inventory_id FROM inventory);

-- Exercise 1.2 --
-- SELECT customer.customer_id,rental.rental_id, customer.last_name, customer.first_name, 
-- inventory.inventory_id
-- FROM rental
-- LEFT JOIN customer ON rental.customer_id = customer.customer_id
-- RIGHT JOIN inventory ON rental.inventory_id = inventory.inventory_id ;

-- Exercise 1.3 -- 
-- SELECT film.title, film_actor.actor_id, actor.first_name, actor.last_name
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE first_name = 'Joe' AND last_name = 'Swank';


-- Exercise 2.1 --
-- SELECT COUNT(*)
-- FROM store
-- INNER JOIN address ON store.store_id = address.address_id
-- INNER JOIN city ON address.address_id = city.city_id
-- INNER JOIN country ON city.city_id = country.country_id GROUP BY country;


-- Exercise 2.2 -- 
-- SELECT film.film_id, inventory.inventory_id, store.store_id
-- FROM film
-- INNER JOIN inventory ON inventory.film_id = inventory.inventory_id
-- INNER JOIN store ON inventory.store_id = store.store_id;


-- Exercise 2.3 -- 
-- SELECT inventory.inventory_id, rental.return_date NOT IN ( SELECT return_date FROM rental )

-- Exercise 2.4 -- 
-- SELECT customer.last_name, store.store_id, address.address
-- FROM customer
-- INNER JOIN store ON customer.customer_id = store.store_id
-- INNER JOIN address ON customer.address_id = address.address_id
-- ;

-- Exercise 2.5 -- 
---

--Exercise 2.6 --
-- SELECT film.title, film.description, film_category.category_id, category.name
-- FROM film
-- INNER JOIN film_category ON film.film_id = film_category.category_id
-- INNER JOIN category ON film_category.film_id = category.category_id
-- WHERE category.name <> 'Horror' AND film.description <> '%beast%';


-- Exercise 2.7 --

-- SELECT 
--     COUNT(length) AS total_minutes,
--     COUNT(length) / 60.0 AS total_hours,
--     COUNT(length) / 1440.0 AS total_days
-- FROM film;
