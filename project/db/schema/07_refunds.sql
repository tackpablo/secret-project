-- Drop and recreate refunds table
DROP TABLE IF EXISTS refunds CASCADE;

CREATE TABLE refunds (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  timestamp TIMESTAMP WITH TIME ZONE,
  reason VARCHAR(255) NOT NULL,
  price MONEY
);