from decimal import Decimal

from django.db import transaction

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import Order, OrderItem
from cart.models import CartItem


class CreateOrderView(APIView):

    permission_classes = [IsAuthenticated]

    @transaction.atomic
    def post(self, request):

        cart_items = CartItem.objects.filter(
            user=request.user
        ).select_related("product")

        if not cart_items.exists():

            return Response(
                {
                    "error": "Your cart is empty"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        total_amount = Decimal("0.00")

        for cart_item in cart_items:

            product = cart_item.product

            if cart_item.quantity > product.stock:

                return Response(
                    {
                        "error": f"Not enough stock for {product.name}"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )

            price = (
                product.discount_price
                if product.discount_price is not None
                else product.price
            )

            total_amount += price * cart_item.quantity

        order = Order.objects.create(

            user=request.user,

            total_amount=total_amount

        )

        for cart_item in cart_items:

            product = cart_item.product

            price = (
                product.discount_price
                if product.discount_price is not None
                else product.price
            )

            subtotal = price * cart_item.quantity

            OrderItem.objects.create(

                order=order,

                product=product,

                quantity=cart_item.quantity,

                price=price,

                subtotal=subtotal

            )

            # Reduce stock

            product.stock -= cart_item.quantity

            product.save()

        # Clear cart after order creation

        cart_items.delete()

        return Response(

            {
                "message": "Order created successfully",

                "order_id": order.id,

                "total_amount": float(
                    order.total_amount
                ),

                "status": order.status,

                "payment_status": order.payment_status

            },

            status=status.HTTP_201_CREATED

        )