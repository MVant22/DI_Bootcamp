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

--Exercise Update 2.1
-- UPDATE students SET birth_date = '1998-11-02' WHERE last_name = 'Benichou' AND first_name = 'Lea';

--Exercise Update 2.2
-- UPDATE students SET last_name = 'Guez' WHERE student_id = 5;

--Exercise Delete 1.1
-- DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou';

--Exercise Count 1.1
-- SELECT COUNT(*) FROM students;

--Exercise Count 1.2
-- SELECT COUNT(*) FROM students WHERE birth_date > '01/01/2000';

--Exercise Insert/Alter 1.1
-- ALTER TABLE students ADD math_grade smallint;

--Exercise Insert/Alter 1.2
-- UPDATE students SET math_grade = 80 WHERE student_id = 1;

--Exercise Insert/Alter 1.3
-- UPDATE students SET math_grade = 90 WHERE student_id = 2 OR student_id = 4;

--Exercise Insert/Alter 1.4
-- UPDATE students SET math_grade = 40 WHERE student_id = 6;

--Exercise Insert/Alter 1.5
-- SELECT COUNT(*) FROM students WHERE math_grade > 83;

--Exercise Insert/Alter 1.6
-- INSERT INTO students(student_id,last_name, first_name, birth_date, math_grade)
-- VALUES ('7','Simpson', 'Omer', '1980-10-03', 70)

--Exercise Insert/Alter 1.7.1
SELECT last_name, first_name, COUNT(math_grade) AS total_grades FROM students 
GROUP BY first_name, last_name
ORDER BY total_grades DESC;

--Exercise SUM 1.1
-- SELECT SUM(math_grade) FROM students;


