"""comanda URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from pyAPI.api.router import router_review, router_business, router_table, router_order,router_contact,router_staff,router_supplier, router_promo,router_product


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/business', include(router_business.urls)),
    path('api/tables', include(router_table.urls)),
    path('api/orders', include(router_order.urls)),
    path('api/reviews', include(router_review.urls)),
    path('api/contacts', include(router_contact.urls)),
    path('api/staff', include(router_staff.urls)),
    path('api/supplier', include(router_supplier.urls)),
    path('api/product', include(router_product.urls)),
    path('api/promo', include(router_promo.urls)),
]
