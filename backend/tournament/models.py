from django.db import models

class Listing(models.Model):
    director = models.CharField(max_length=100, default='name')
    phone_number = models.IntegerField(max_length=12)
    email = models.EmailField(max_length=50)
    venue = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=20)
    zipcode = models.IntegerField(max_length=15)
    date = models.DateField()
    sign_up_time = models.CharField(max_length=10)
    start_time = models.CharField(max_length =10)
    description = models.TextField(max_length = 1000)

    def __str__(self):
        return self.venue
