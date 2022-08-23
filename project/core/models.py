from django.db import models

# Create your models here.
class User(models.Model):
    PAY_TYPE = [
        ('CASH', 'Cash'),
        ('CARD', 'Card')
    ]

    """Model representing a user"""
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=24)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    payment_type = models.CharField(choices=PAY_TYPE, default='CARD')
    is_driver = models.BooleanField()

class Car(models.Model):
    CAR_TYPE = [
        ('CONVERTABLE', 'Convertable'),
        ('SEDAN', 'Sedan'),
        ('SUV', 'SUV'),
        ('VAN', 'Van'),
    ]

    """Model representing a vehicle"""
    driver_id = models.ForeignKey(Driver, on_delete=models.CASCADE)
    brand = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    type = models.CharField(choices=CAR_TYPE)

class Driver(models.Model):
    """Model representing a driver"""
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    car_id = models.ForeignKey(Car, on_delete=models.CASCADE)
    background_check = models.CharField(max_length=255)
    profile_photo = models.CharField(max_length=255)
    driver_license = models.CharField(max_length=255)
    vehicle_insurance = models.CharField(max_length=255)
    vehicle_registration = models.CharField(max_length=255)
    joined_date = models.DateTimeField(auto_now_add=True)

class Transaction(models.Model):
    PAY_TYPE = [
        ('CASH', 'Cash'),
        ('CARD', 'Card')
    ]

    """Model representing a transaction"""
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    driver_id = models.ForeignKey(Driver, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    payment_type = models.CharField(choices=PAY_TYPE, default='CARD')
    base_amount = models.DecimalField(max_digits=6, decimal_places=2)
    surge_amount = models.DecimalField(max_digits=6, decimal_places=2)
    total_amount = models.DecimalField(max_digits=6, decimal_places=2)

class Trip(models.Model):
    """Model representing trips"""
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    driver_id = models.ForeignKey(Driver, on_delete=models.CASCADE)
    transaction_id = models.ForeignKey(Transaction, on_delete=models.CASCADE)
    start_location = models.CharField(max_length=255)
    end_location = models.CharField(max_length=255)
    trip_start_time = models.DateTimeField()
    trip_end_time = models.DateTimeField()
    trip_wait_time = models.DateTimeField()
    price = models.DecimalField(max_digits=6, decimal_places=2)




    
    

