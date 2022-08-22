-- Drop and recreate transactions table
DROP TABLE IF EXISTS transactions CASCADE;

DROP TYPE IF EXISTS pay_type;

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
