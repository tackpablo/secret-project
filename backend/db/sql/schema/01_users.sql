-- Drop and recreate Users table
DROP TABLE IF EXISTS users CASCADE;

DROP TYPE IF EXISTS pay_type;

CREATE TYPE pay_type AS ENUM ('Cash', 'Card');

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  payment_type pay_type,
  is_driver BOOLEAN NOT NULL DEFAULT FALSE
);