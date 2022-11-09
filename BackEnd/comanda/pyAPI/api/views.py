from rest_framework import ModelViewSet
#from BackEnd.comanda.pyAPI.models import Product
from pyApi.models import Business, Table, Review, Product

from .serializers import ReviewSerializer, BusinessSerializer, TableSerializer, ProductSerializer


class BusinessViewSet(ModelViewSet):
    serializer_class = BusinessSerializer
    queryset = Business.objects.all()

class TableViewSet(ModelViewSet):
    serializer_class = TableSerializer
    queryset = Table.objects.all()    

class ReviewViewSet(ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    
      #TODO supplier y promo