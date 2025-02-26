-- Database: CustomerProfile

-- DROP DATABASE IF EXISTS "CustomerProfile";

-- CREATE DATABASE "CustomerProfile"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United Kingdom.1252'
--     LC_CTYPE = 'English_United Kingdom.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- EXERCISE 1.1 -- 

-- CREATE TABLE customers (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50),
-- 	last_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE customer_profile (
-- 	customer_profile_id SERIAL PRIMARY KEY,
-- 	customer_id int,
-- 	isLoggedIn BOOLEAN DEFAULT FALSE NOT NULL,
-- 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
-- );

-- Exercise 1.2 --
-- INSERT INTO customers (first_name, last_name)
-- VALUES 
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive');


-- Exercise 1.3 -- 
-- INSERT INTO customer_profile (customer_id, IsLoggedIn)
-- VALUES
-- ((SELECT customer_id FROM customers WHERE first_name = 'John' AND last_name = 'Doe' ), TRUE),
-- ((SELECT customer_id FROM customers WHERE first_name = 'Jerome' AND last_name = 'Lalu'), FALSE);

-- Exercise 1.4 -- 
-- SELECT customers.first_name, customer_profile.IsLoggedIn 
-- FROM customers
-- INNER JOIN customer_profile ON customers.customer_id = customer_profile.customer_id
-- WHERE customer_profile.IsLoggedIn = TRUE;

-- SELECT customers.first_name, customer_profile.IsLoggedIn 
-- FROM customers
-- INNER JOIN customer_profile ON customers.customer_id = customer_profile.customer_id;

-- SELECT COUNT(customer_profile.IsLoggedIn)
-- FROM customers
-- INNER JOIN customer_profile ON customers.customer_id = customer_profile.customer_id;

-- Exercise 2.1 -- 
-- CREATE TABLE Book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL,
-- 	author VARCHAR(50) NOT NULL
-- );

-- Exercise 2.2 -- 
-- INSERT INTO Book(title,author)
-- VALUES
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee');

-- Exercise 2.3
-- CREATE TABLE Student (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50) UNIQUE NOT NULL,
-- 	age int CHECK (age <=15)
-- );

-- Exercise 2.4 --
-- INSERT INTO Student(name, age)
-- VALUES
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14);

-- Exercise 2.5 -- 
-- CREATE TABLE Library (
--     book_fk_id INT,
--     student_fk_id INT,
--     borrowed_date DATE NOT NULL,
--     PRIMARY KEY (book_fk_id, student_fk_id),
--     FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- Exercise 2.5 --
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland' LIMIT 1),
--  (SELECT student_id FROM Student WHERE name = 'John' LIMIT 1),
--  '2022-02-15'),

-- Exercise 2.6 --
-- ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird' LIMIT 1),
--  (SELECT student_id FROM Student WHERE name = 'Bob' LIMIT 1),
--  '2021-03-03'),

-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland' LIMIT 1),
--  (SELECT student_id FROM Student WHERE name = 'Lera' LIMIT 1),
--  '2021-05-23'),

-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter' LIMIT 1),
--  (SELECT student_id FROM Student WHERE name = 'Bob' LIMIT 1),
--  '2021-08-12');

-- Exercise 2.7 -- 
-- SELECT * FROM Library;

-- SELECT 
--     s.name AS student_name, 
--     b.title AS book_title, 
--     l.borrowed_date
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id; 

-- SELECT AVG(s.age) AS average_age
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- DELETE FROM Student WHERE name = 'John';

-- SELECT * FROM Library;
