from django.urls import path
from . import views

urlpatterns = [
    path('listingsDjango/', views.Listings.as_view(), name ='listings'),
    path('listings/', views.listings, name = 'listings'),
    path('listings_protected/', views.ListingsProtected.as_view(), name ='listings'),
    path('listing_create/', views.ListingCreateProtected.as_view(), name='listing_create'),
    path('listing_detail/<uuid:pk>/', views.ListingDetailProtected.as_view(), name='listing_detail'),
    path('listing_edit/<uuid:pk>/', views.ListingDetailProtected.as_view(), name='listing_edit'),
    path('listing_delete/<uuid:pk>/', views.ListingDetailProtected.as_view(), name='listing_delete'),
    path('landing_page/', views.FeaturedPlayersProtected.as_view(), name ='featured_players'),
    path('player_detail/<uuid:pk>/', views.PlayerDetailProtected.as_view(), name='player_detail'),
    path('news/', views.NewsProtected.as_view(), name ='news'),
    path('news_detail/<uuid:pk>/', views.NewsDetailProtected.as_view(), name='news_detail'),
]

