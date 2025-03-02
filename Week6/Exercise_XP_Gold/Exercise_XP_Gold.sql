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

-- SELECT last_name, first_name , birth_date FROM students ORDER BY last_name LIMIT 4;

-- SELECT last_name, first_name , birth_date FROM students ORDER BY birth_date DESC LIMIT 1;

SELECT last_name, first_name , birth_date FROM students LIMIT 3 OFFSET 2;
