from rest_framework import ModelViewSet
from review.models import Review
from review.api.serializers import ReviewSerializer


class ReviewViewSet(ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    
