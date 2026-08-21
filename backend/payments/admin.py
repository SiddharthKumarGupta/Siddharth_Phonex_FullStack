from django.contrib import admin
from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'order',
        'user',
        'payment_method',
        'payment_status',
        'amount',
        'created_at',
    )

    list_filter = (
        'payment_method',
        'payment_status',
        'created_at',
    )

    search_fields = (
        'transaction_id',
        'user__username',
        'user__email',
    )