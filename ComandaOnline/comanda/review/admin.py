from django.contrib import admin
from review.models import Review

# Register your models here.
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'review_text', 'date_review', 'rate')
    
    
