from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = [
            'id',
            'order',
            'user',
            'payment_method',
            'payment_status',
            'amount',
            'transaction_id',
            'created_at',
        ]

        read_only_fields = [
            'id',
            'user',
            'payment_status',
            'transaction_id',
            'created_at',
        ]