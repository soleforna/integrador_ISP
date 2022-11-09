from django.contrib import admin
from .models import Business, Table, Order, Review, Product, Supplier, Promo


@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "address", "phone", "email", "website", "created_at")
    search_fields = ["name", "email", "address"]


@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ("id", "table_number", "chairs", "business", "created_at")
    search_fields = ["table_number", "chairs", "business"]


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "table_id", "order_number", "created_at")
    search_fields = ["id", "table_id", "order_number", "created_at"]


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "review_text", "date_review", "rate")
    search_fields = ["name", "email", "review_text"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    #Lista de campos para administrar
    list_display = ("id", "name", "description", "sealing_price", "cost_price", "suppliers","stock","status","created_at")
    #Lista de campos de busqueda
    search_fields = ["name", "description", "suppliers"]


#TODO supplier y promo