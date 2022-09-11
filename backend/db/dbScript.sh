# CREATE DATABASE chauffeur;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cars CASCADE;
DROP TABLE IF EXISTS drivers CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS refunds CASCADE;
DROP TYPE IF EXISTS pay_type;
SET TIME ZONE 'US/Pacific';

CREATE TYPE pay_type AS ENUM ('CASH', 'CARD');

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

INSERT INTO users (first_name, last_name, email, password, phone_number, city, payment_type, is_driver) VALUES
  ('Tom', 'Ford', 'test1@test.com', '1234', '123-456-7890', 'Burnaby', 'CARD' , true),
  ('Maggie', 'Benson', 'test2@test.com', '12345', '123-456-7899', 'Vancouver', 'CASH' , true)
;


CREATE TABLE cars (
  id SERIAL PRIMARY KEY NOT NULL,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL
);

INSERT INTO cars (brand, model, type) VALUES
  ('Honda', 'Civic', 'Hatchback'),
  ('Toyota', 'Camry', 'Sedan')
;


CREATE TABLE drivers (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
  background_check VARCHAR(255) NOT NULL,
  profile_photo VARCHAR(255) NOT NULL,
  driver_license VARCHAR(255) NOT NULL,
  vehicle_insurance VARCHAR(255) NOT NULL,
  vehicle_registration VARCHAR(255) NOT NULL,
  joined_date TIMESTAMP WITH TIME ZONE
);


INSERT INTO drivers (user_id, car_id, background_check, profile_photo, driver_license, vehicle_insurance, vehicle_registration, joined_date) VALUES
  (1, 1, 'CLEARED', 'PROFILE_URL', 'LICENSE_URL', 'INSURANCE_URL', 'REGISTRATION_URL', '2022-05-07 07:10:11-07'),
  (2, 2, 'PENDING', 'PROFILE_URL', 'LICENSE_URL', 'INSURANCE_URL', 'REGISTRATION_URL', '2022-05-20 11:07:18-06')
;


CREATE TYPE pay_type AS ENUM ('Cash', 'Card');

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  timestamp TIMESTAMP WITH TIME ZONE,
  payment_type pay_type,
  base_amount MONEY,
  surge_amount MONEY,
  total_amount MONEY
);

INSERT INTO transactions (user_id, driver_id, timestamp, payment_type, base_amount, surge_amount, total_amount) VALUES
  (1, 2, '2022-06-21 11:07:18-06', 'CARD', 23.10, 5.00, 30.00),
  (2, 1, '2022-06-29 11:07:18-06', 'CASH', 11.10, 8.00, 20.00)
;


CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  transaction_id INTEGER REFERENCES transactions(id) ON DELETE CASCADE,
  start_location VARCHAR(255) NOT NULL,
  end_location VARCHAR(255) NOT NULL,
  trip_start_time TIMESTAMP WITH TIME ZONE,
  trip_end_time TIMESTAMP WITH TIME ZONE,
  trip_wait_time TIMESTAMP WITH TIME ZONE,
  price MONEY)
;


INSERT INTO trips (user_id, driver_id, transaction_id, start_location, end_location, trip_start_time, trip_end_time, trip_wait_time, price) VALUES
  (1, 2, 1, 'Burnaby', 'Vancouver', '2022-06-21 11:06:18-06', '2022-06-21 11:06:45-06', '2022-06-21 00:05:00-06', 30.00),
  (2, 1, 2, 'Vancouver', 'Burnaby', '2022-06-29 13:00:00-06', '2022-06-29 13:25:00-06', '2022-06-29 00:03:00-06', 20.00)
;


CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE,
  start_name VARCHAR(255) NOT NULL,
  start_latitude VARCHAR(255) NOT NULL,
  start_longitude VARCHAR(255) NOT NULL,
  end_name VARCHAR(255) NOT NULL,
  end_latitude VARCHAR(255) NOT NULL,
  end_longitude VARCHAR(255) NOT NULL
);


INSERT INTO locations (trip_id, start_name, start_latitude, start_longitude, end_name, end_latitude, end_longitude) VALUES
  (1, 'Burnaby', '49.25', '122.98', 'Vancouver', '49.28', '123.12'),
  (2, 'Vancouver', '49.28', '123.12', 'Burnaby', '49.25', '122.98')
;


CREATE TABLE refunds (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  timestamp TIMESTAMP WITH TIME ZONE,
  reason VARCHAR(255) NOT NULL,
  price MONEY
);

INSERT INTO refunds (user_id, driver_id, timestamp, reason, price) VALUES
  (1, 2, '2022-06-24 12:00:18-06', 'Stolen Card Used', 30.00)
;