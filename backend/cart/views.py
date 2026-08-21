from decimal import Decimal

from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import CartItem
from products.models import Product


class CartView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        cart_items = CartItem.objects.filter(
            user=request.user
        ).select_related("product")

        items = []

        total_price = Decimal("0.00")
        total_items = 0

        for item in cart_items:

            product = item.product

            item_price = (
                product.discount_price
                if product.discount_price is not None
                else product.price
            )

            item_total = item_price * item.quantity

            image_url = None

            if product.image:
                image_url = request.build_absolute_uri(
                    product.image.url
                )

            items.append({
                "id": item.id,
                "product_id": product.id,
                "name": product.name,
                "description": product.description,
                "price": float(item_price),
                "original_price": float(product.price),
                "quantity": item.quantity,
                "total_price": float(item_total),
                "image": image_url,
            })

            total_price += item_total
            total_items += item.quantity

        return Response({
            "items": items,
            "total_items": total_items,
            "total_price": float(total_price),
        })

    def post(self, request):

        print("🔥 CART POST VIEW REACHED")
        print("REQUEST DATA:", request.data)

        product_id = request.data.get("product_id")

        quantity = int(
            request.data.get("quantity", 1)
        )

        product = get_object_or_404(
            Product,
            id=product_id
        )

        if quantity <= 0:

            return Response(
                {
                    "error": "Quantity must be greater than 0"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if quantity > product.stock:

            return Response(
                {
                    "error": "Not enough stock available"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        cart_item, created = CartItem.objects.get_or_create(
            user=request.user,
            product=product
        )

        if created:

            cart_item.quantity = quantity

        else:

            new_quantity = cart_item.quantity + quantity

            if new_quantity > product.stock:

                return Response(
                    {
                        "error": "Not enough stock available"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )

            cart_item.quantity = new_quantity

        cart_item.save()

        return Response(
            {
                "message": "Product added to cart",
                "quantity": cart_item.quantity
            },
            status=status.HTTP_201_CREATED
        )


class UpdateCartItemView(APIView):

    permission_classes = [IsAuthenticated]

    def patch(self, request, item_id):

        cart_item = get_object_or_404(
            CartItem,
            id=item_id,
            user=request.user
        )

        quantity = int(
            request.data.get("quantity")
        )

        if quantity <= 0:

            cart_item.delete()

            return Response({
                "message": "Item removed from cart"
            })

        if quantity > cart_item.product.stock:

            return Response(
                {
                    "error": "Not enough stock available"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        cart_item.quantity = quantity

        cart_item.save()

        return Response({
            "message": "Cart updated",
            "quantity": cart_item.quantity
        })


class RemoveCartItemView(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, item_id):

        cart_item = get_object_or_404(
            CartItem,
            id=item_id,
            user=request.user
        )

        cart_item.delete()

        return Response({
            "message": "Item removed from cart"
        })