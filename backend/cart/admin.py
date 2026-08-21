from django.contrib import admin
from .models import CartItem


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "user",
        "product",
        "quantity",
        "get_price",
        "get_total_price",
        "created_at",
        "updated_at",
    )

    list_filter = (
        "created_at",
        "updated_at",
    )

    search_fields = (
        "user__email",
        "user__username",
        "product__name",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
        "get_price",
        "get_total_price",
    )

    ordering = (
        "-created_at",
    )

    @admin.display(
        description="Price"
    )
    def get_price(self, obj):

        return f"₹{obj.price}"

    @admin.display(
        description="Total Price"
    )
    def get_total_price(self, obj):

        return f"₹{obj.total_price}"