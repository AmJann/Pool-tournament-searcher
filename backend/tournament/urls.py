from django.urls import path
from . import views

urlpatterns = [
    path('listingsDjango/', views.Listings.as_view(), name ='listings'),
    path('listings/', views.listings, name = 'listings'),
    path('listings_protected/', views.ListingsProtected.as_view(), name ='listings'),
    path('listing_create/', views.ListingCreateProtected.as_view(), name='listing_create'),
    path('listing_detail/<uuid:pk>/', views.ListingDetailProtected.as_view(), name='listing_detail')
]

