from django.db import models

# Este es mi modelo de los Negocios
class Business(models.Model):
    name = models.CharField(max_length=80)
    phone = models.CharField(max_length=80, null=True, blank=True)
    email = models.EmailField()
    address = models.CharField(max_length=150)
    website = models.CharField(max_length=80, null=True, blank=True)
    facebook = models.CharField(max_length=80, null=True, blank=True)
    instagram = models.CharField(max_length=80, null=True, blank=True)
    twitter = models.CharField(max_length=80, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Este es mi modelo de las Mesas
class Table(models.Model):
    table_number = models.IntegerField()
    chairs = models.IntegerField()
    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.table_number

# Este es mi modelo de las Ordenes
class Order(models.Model):
    order_number = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    table = models.ForeignKey(Table, on_delete=models.CASCADE)

    def __str__(self):
        return self.order_number    

# Este es mi modelo de las Reseñas
class Review(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField()
    review_text = models.TextField()
    date_review = models.DateTimeField(auto_now_add=True)
    rate = models.IntegerField()
    order = models.ForeignKey(Order, on_delete=models.CASCADE)

    def __str__(self):
        return self.email

