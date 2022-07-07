from django.shortcuts import render

from .models import Listing

def listings(request):
    listings = Listing.objects.all()
    return render(request, 'listings.html', {'listings': listings})

# Create your views here.
