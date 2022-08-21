-- 01_users_seeds.sql

INSERT INTO users (first_name, last_name, email, password, phone_number, city, payment_type, is_driver) VALUES
  ('Tom', 'Ford', 'test1@test.com', '1234', '123-456-7890', 'Burnaby', 'CARD' , true),
  ('Maggie', 'Benson', 'test2@test.com', '1234', '123-456-7899', 'Vancouver', 'CASH' , true),
;
