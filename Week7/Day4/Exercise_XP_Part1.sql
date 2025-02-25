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
-- SELECT * FROM language;

-- Exercise 1.2 -- 
-- SELECT film.title, film.description , language.name
-- FROM film
-- INNER JOIN language language ON film.film_id = film.language_id;

-- Exercise 1.3 -- 
-- SELECT film.title, film.description , language.name
-- FROM film
-- FULL OUTER JOIN language ON film.film_id = language.language_id;

-- Exercise 1.4 -- 
-- CREATE TABLE new_film (
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(200) NOT NULL
-- );

-- INSERT INTO new_film (name)
-- VALUES 
-- 	('Transformers'),
-- 	('Terminator X'),
-- 	('Avengers End Game'),
-- 	('Sonic x Shadow'),
-- 	('Metal Gear');

-- -- Exercise 1.5 --

-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY,
-- 	film_id INTEGER NOT NULL,
-- 	language_id INTEGER NOT NULL,
-- 	title VARCHAR(50) NOT NULL,
-- 	score INTEGER CHECK (score BETWEEN 1 AND 10),
-- 	review_text VARCHAR,
-- 	last_update DATE,
-- 	FOREIGN KEY (film_id) REFERENCES film(film_id),
-- 	FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

-- Exercise 6 --
-- INSERT INTO customer_review (film_id,language_id, title, score, review_text)
-- VALUES (1,1, 'Extraordinary', 5, 'Good quality scenes and famous actors in the casting');

-- INSERT INTO customer_review (film_id,language_id, title, score, review_text)
-- VALUES (4,1, 'Insufficient', 1, 'The images is flow and can bearly distinct the characters');

-- DELETE FROM customer_review WHERE review_id = 2;

