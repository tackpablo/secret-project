-- 06_refunds_seeds.sql

SET TIME ZONE 'US/Pacific';

INSERT INTO refunds (user_id, driver_id, timestamp, reason, price) VALUES
  (1, 2, '2022-06-24 12:00:18-06', 'Stolen Card Used', 30.00),
;