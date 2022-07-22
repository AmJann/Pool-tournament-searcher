from django.shortcuts import render

from .models import Listing
from .models import FeaturedPlayer
from django.http import JsonResponse


from rest_framework import generics, permissions
from .serializers import ListingSerializer
from .serializers import FeaturedPlayerSerializer
from .models import Listing

class Listings(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class ListingsProtected(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer    

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # can make this ListAPIView and CreateAPIView seperate to give different
class ListingCreateProtected(generics.CreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer  
    
    permission_classes = [permissions.IsAuthenticated] 

class ListingDetailProtected(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ListingSerializer
    queryset = Listing.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class FeaturedPlayersProtected(generics.ListAPIView):
    queryset = FeaturedPlayer.objects.all()
    serializer_class = FeaturedPlayerSerializer    

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PlayerDetailProtected(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FeaturedPlayerSerializer
    queryset = FeaturedPlayer.objects.all()

    permission_classes = [permissions.AllowAny]    


def listings(request):
    listings = Listing.objects.all()
    return render(request, 'listings.html', {'listings': listings})


