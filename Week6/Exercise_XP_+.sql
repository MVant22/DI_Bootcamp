-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United Kingdom.1252'
--     LC_CTYPE = 'English_United Kingdom.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
-- 	student_id SERIAL PRIMARY KEY NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	birth_date DATE
-- );

-- INSERT INTO students (student_id, last_name, first_name, birth_date)
-- VALUES 
-- 	(1, 'Benichou', 'Marc', '02/11/1998'),
-- 	(2, 'Cohen', 'Yoan', '03/12/2010'),
-- 	(3, 'Benichou', 'Lea', '27/07/1987'),
-- 	(4, 'DUX', 'Amelia', '07/04/1996'),
-- 	(5, 'Grez', 'David', '14/06/2003'),
-- 	(6, 'Simpson', 'Omer', '03/10/1980');

-- SELECT EXERCISES --

-- SELECT * FROM students;

-- SELECT last_name, first_name FROM students; 

-- SELECT last_name, first_name FROM students WHERE student_id = 2;

-- SELECT last_name, first_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- SELECT last_name, first_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a%';

-- SELECT last_name, first_name FROM students WHERE first_name ILIKE 'a%';

-- SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a';

-- SELECT * 
-- FROM students 
-- WHERE RIGHT(LEFT(first_name, LENGTH(first_name) - 1), 1) = 'a';

-- SELECT last_name, first_name FROM students WHERE student_id = 1 OR student_id = 3;

-- SELECT last_name, first_name FROM students WHERE birth_date >= '01/01/2000';

