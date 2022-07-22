from rest_framework import serializers
from .models import Listing
from .models import FeaturedPlayer

class ListingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Listing
        fields = ('uuid','title','director', 'phone_number', 'email', 'venue', 'address', 'city', 'state', 'zipcode', 'date', 'sign_up_time', 'start_time', 'description')

class FeaturedPlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FeaturedPlayer
        fields = ('uuid', 'name','birth_date','country', 'fargo','image','current_year_earnings','description')