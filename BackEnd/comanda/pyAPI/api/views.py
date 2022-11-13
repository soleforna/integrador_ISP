from rest_framework import ModelViewSet
#from BackEnd.comanda.pyAPI.models import Product
from pyApi.models import Business, Table, Review, Product, Supplier,Promo,Contact,Staff

from .serializers import ReviewSerializer, BusinessSerializer, TableSerializer, ProductSerializer,SupplierSerializer,PromoSerializer,ContactSerializer,StaffSerializer


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

class SupplierViewSet(ModelViewSet):
    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()

class PromoViewSet(ModelViewSet):
    serializer_class = PromoSerializer
    queryset = Promo.objects.all()

class ContactViewSet(ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()



class StaffViewSet(ModelViewSet):
    serializer_class = StaffSerializer
    queryset = Staff.objects.all()
