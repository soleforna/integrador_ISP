from rest_framework.routers import DefaultRouter
from review.api import ReviewApiViewSet

router_review = DefaultRouter()

router_review.register( prefix='post', basename='review', viewset=ReviewApiViewSet)
