from django.contrib import admin
from .models import User, Car, Driver, Transaction, Trip, Location, Refund

# Register your models here.
admin.site.register(User)
admin.site.register(Car)
admin.site.register(Driver)
admin.site.register(Transaction)
admin.site.register(Trip)
admin.site.register(Location)
admin.site.register(Refund)