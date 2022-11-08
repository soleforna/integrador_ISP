from rest_framework import ModelViewSet
from pyApi.models import Business, Table, Review
from .serializers import ReviewSerializer, BusinessSerializer, TableSerializer


class BusinessViewSet(ModelViewSet):
    serializer_class = BusinessSerializer
    queryset = Business.objects.all()

class TableViewSet(ModelViewSet):
    serializer_class = TableSerializer
    queryset = Table.objects.all()    

class ReviewViewSet(ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
