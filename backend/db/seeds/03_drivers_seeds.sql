-- 03_drivers_seeds.sql

SET TIME ZONE 'US/Pacific';

INSERT INTO drivers (user_id, car_id, background_check, profile_photo, driver_license, vehicle_insurance, vehicle_registration, joined_date) VALUES
  (1, 1, 'CLEARED', 'PROFILE_URL', 'LICENSE_URL', 'INSURANCE_URL', 'REGISTRATION_URL', '2022-05-07 07:10:11-07'),
  (2, 2, 'PENDING', 'PROFILE_URL', 'LICENSE_URL', 'INSURANCE_URL', 'REGISTRATION_URL', '2022-05-20 11:07:18-06')
;