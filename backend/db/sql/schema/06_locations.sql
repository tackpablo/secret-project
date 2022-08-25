-- Drop and recreate locations table
DROP TABLE IF EXISTS locations CASCADE;

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

