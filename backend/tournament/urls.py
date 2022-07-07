from django.urls import path
from . import views

urlpatterns = [
    path('listingsDjango/', views.Listings.as_view(), name ='listings'),
    path('listings/', views.listings, name = 'listings')
]