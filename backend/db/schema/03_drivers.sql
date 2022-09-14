-- Drop and recreate drivers table
DROP TABLE IF EXISTS drivers CASCADE;

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  background_check VARCHAR(255) NOT NULL,
  profile_photo VARCHAR(255) NOT NULL,
  driver_license VARCHAR(255) NOT NULL,
  vehicle_insurance VARCHAR(255) NOT NULL,
  vehicle_registration VARCHAR(255) NOT NULL,
  joined_date TIMESTAMP WITH TIME ZONE
);
