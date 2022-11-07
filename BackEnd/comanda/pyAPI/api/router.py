from rest_framework.routers import DefaultRouter
from pyAPI.api import BusinessApiViewSet, TableApiViewSet, OrderApiViewSet, ReviewApiViewSet

router_business = DefaultRouter()
router_table = DefaultRouter()
router_order = DefaultRouter()
router_review = DefaultRouter()


router_business.register(prefix='', basename='business', viewset=BusinessApiViewSet)
router_table.register(prefix='', basename='table', viewset=TableApiViewSet)
router_order.register(prefix='', viewset=OrderApiViewSet)
router_review.register(prefix='', basename='review', viewset=ReviewApiViewSet)
