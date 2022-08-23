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



    

