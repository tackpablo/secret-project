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



    

