from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "brand",
        "category",
        "price",
        "discount_price",
        "stock",
        "is_available",
        "created_at",
    )

    list_filter = (
        "category",
        "brand",
        "is_available",
    )

    search_fields = (
        "name",
        "brand",
        "description",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    ordering = (
        "-created_at",
    )