-- Drop and recreate refunds table
DROP TABLE IF EXISTS refunds CASCADE;

CREATE TABLE refunds (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  reason VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE,
  price MONEY
);