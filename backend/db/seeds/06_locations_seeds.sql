-- 06_trips_seeds.sql

SET TIME ZONE 'US/Pacific';

INSERT INTO locations (trip_id, start_name, start_latitude, start_longitude, end_name, end_latitude, end_longitude) VALUES
  (1, 'Burnaby', '49.25', '122.98', 'Vancouver', '49.28', '123.12'),
  (2, 'Vancouver', '49.28', '123.12', 'Burnaby', '49.25', '122.98')
;