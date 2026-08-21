from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ("mobile", "Mobile"),
        ("tablet", "Tablet"),
        ("laptop", "Laptop"),
        ("accessories", "Accessories"),
        ("tv", "TV"),
    ]

    name = models.CharField(max_length=255)

    slug = models.SlugField(
        unique=True,
        blank=True
    )

    description = models.TextField()

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    discount_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    category = models.CharField(
    max_length=50,
    choices=CATEGORY_CHOICES,
    default="mobile"
)

    brand = models.CharField(
        max_length=100,
        blank=True
    )

    stock = models.PositiveIntegerField(
        default=0
    )

    image = models.ImageField(
        upload_to="products/",
        blank=True,
        null=True
    )

    is_available = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.name