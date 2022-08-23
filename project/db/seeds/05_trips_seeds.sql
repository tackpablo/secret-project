-- 06_trips_seeds.sql

SET TIME ZONE 'US/Pacific';

INSERT INTO trips (user_id, driver_id, car_id, transaction_id, start_location, end_location, trip_start_time, trip_end_time, trip_wait_time, price) VALUES
  (1, 2, 1, 1, 'Burnaby', 'Vancouver', '2022-06-21 11:06:18-06', '2022-06-21 11:06:45-06', '2022-06-21 00:05:00-06', 30.00),
  (2, 1, 2, 2, 'Vancouver', 'Burnaby', '2022-06-29 13:00:00-06', '2022-06-29 13:25:00-06', '2022-06-29 13:05:00-06', 20.00)
;
