-- 04_transactions_seeds.sql

SET TIME ZONE 'US/Pacific';

INSERT INTO transactions (user_id, driver_id, timestamp, payment_type, base_amount, surge_amount, total_amount) VALUES
  (1, 2, '2022-06-21 11:07:18-06', 'CARD', 23.10, 5.00, 30.00),
  (2, 1, '2022-06-29 11:07:18-06', 'CASH', 11.10, 8.00, 20.00)
;