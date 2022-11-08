from rest_framework.viewsets import ModelViewSet
from pyAPI.models import Business, Table, Order, Review
from .serializers import ReviewSerializer, BusinessSerializer,OrderSerializer, TableSerializer

class BusinessApiViewSet(ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer


class TableApiViewSet(ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer


class OrderApiViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ReviewApiViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
