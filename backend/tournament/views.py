from django.shortcuts import render

from .models import Listing
from django.http import JsonResponse


from rest_framework import generics
from .serializers import ListingSerializer
from .models import Listing

class Listings(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

def listings(request):
    listings = Listing.objects.all()
    return render(request, 'listings.html', {'listings': listings})


