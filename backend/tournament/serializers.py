from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Listing
        fields = ('uuid','director', 'phone_number', 'email', 'venue', 'address', 'city', 'state', 'zipcode', 'date', 'sign_up_time', 'start_time', 'description')
