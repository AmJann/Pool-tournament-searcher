from django.urls import path
from . import views

urlpatterns = [
    path('listingsDjango/', views.Listings.as_view(), name ='listings'),
    path('listings/', views.listings, name = 'listings'),
    path('login', views.Login),
    path('signup', views.Signup),
    path('listings_protected/', views.ListingsProtected.as_view(), name ='listings'),
]
