from rest_framework.serializers import ModelSerializer
from pyAPI.models import Business, Table, Order, Review, Product, Supplier, Promo


class BusinessSerializer(ModelSerializer):
    class Meta:
        model = Business
        fields = "__all__"


class TableSerializer(ModelSerializer):
    class Meta:
        model = Table
        fields = "__all__"


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        
class SupplierSerializer(ModelSerializer):
    class Meta:
        model = Supplier
        fields = "__all__"
        
class PromoSerializer(ModelSerializer):
    class Meta:
        model = Promo
        fields = "__all__"
