from django.shortcuts import render

from .models import Listing
from django.http import JsonResponse


from rest_framework import generics, permissions
from .serializers import ListingSerializer
from .models import Listing

class Listings(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class ListingsProtected(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer    

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # can make this ListAPIView and CreateAPIView seperate to give different permissions
def listings(request):
    listings = Listing.objects.all()
    return render(request, 'listings.html', {'listings': listings})

def Login(request):
    return JsonResponse({'loggedIn':True, 'username': 'mock_user'})

def Signup(request):
    return JsonResponse({'loggedIn':True, 'username': 'mock_user'})
