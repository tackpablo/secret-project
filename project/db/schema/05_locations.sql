-- Drop and recreate locations table
DROP TABLE IF EXISTS locations CASCADE;

CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  latitude VARCHAR(255) NOT NULL,
  longitude VARCHAR(255) NOT NULL
);

