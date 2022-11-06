from django.db import models

# Este es mi modelo de las Reseñas
class Review(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    review_text = models.TextField()
    date_review = models.DateTimeField(auto_now_add=True)
    rate = models.IntegerField()

    def __str__(self):
        return self.email
    
