from rest_framework.viewsets import ModelViewSet
from review.models import Review
from review.api.serializers import ReviewSerializer

class ReviewApiViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
