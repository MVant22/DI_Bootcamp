-- Database: Product_items

-- DROP DATABASE IF EXISTS "Product_items";

-- CREATE DATABASE "Product_items"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United Kingdom.1252'
--     LC_CTYPE = 'English_United Kingdom.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- CREATE TABLE product_orders (
--     order_id SERIAL PRIMARY KEY,
--     customer_name VARCHAR(255) NOT NULL,
--     order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     total_price DECIMAL(10,2) DEFAULT 0.00
-- );

-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE,
--     product_name VARCHAR(255) NOT NULL,
--     quantity INT NOT NULL,
--     price DECIMAL(10,2) NOT NULL
-- );

-- ALTER TABLE items
-- ADD COLUMN order_id INT NOT NULL, 
-- ADD CONSTRAINT fk_order
-- FOREIGN KEY (order_id) REFERENCES product_orders(order_id) 
-- ON DELETE CASCADE;

-- CREATE OR REPLACE FUNCTION get_total_price(order_id INT)
-- RETURNS DECIMAL(10,2) AS $$
-- DECLARE
--     total DECIMAL(10,2);
-- BEGIN
--     SELECT SUM(quantity * price) 
--     INTO total
--     FROM items
--     WHERE order_id = $1;
    
--     -- If no items are found for the order, return 0.00
--     IF total IS NULL THEN
--         RETURN 0.00;
--     END IF;
    
--     RETURN total;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(255) NOT NULL UNIQUE,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password_hash VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- ALTER TABLE product_orders
-- ADD COLUMN user_id INT,
-- ADD CONSTRAINT fk_user
-- FOREIGN KEY (user_id) REFERENCES users(user_id)
-- ON DELETE CASCADE;

-- CREATE OR REPLACE FUNCTION get_user_order_total(user_id INT, order_id INT)
-- RETURNS DECIMAL(10,2) AS $$
-- DECLARE
--     total DECIMAL(10,2);
-- BEGIN
--     SELECT SUM(i.quantity * i.price)
--     INTO total
--     FROM items i
--     JOIN product_orders o ON o.order_id = i.order_id
--     WHERE o.user_id = $1 AND i.order_id = $2;
    
--     -- If no items are found, return 0.00
--     IF total IS NULL THEN
--         RETURN 0.00;
--     END IF;
    
--     RETURN total;
-- END;
-- $$ LANGUAGE plpgsql
