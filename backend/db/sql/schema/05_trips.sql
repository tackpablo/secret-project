-- Drop and recreate trips table
DROP TABLE IF EXISTS trips CASCADE;

CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  transaction_id INTEGER REFERENCES transactions(id) ON DELETE CASCADE,
  start_location VARCHAR(255) NOT NULL,
  end_location VARCHAR(255) NOT NULL,
  trip_start_time TIMESTAMP WITH TIME ZONE
  trip_end_time TIMESTAMP WITH TIME ZONE
  trip_wait_time TIMESTAMP WITH TIME ZONE
  price MONEY
);

