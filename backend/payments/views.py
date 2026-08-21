import razorpay

from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Payment
from orders.models import Order


client = razorpay.Client(
    auth=(
        settings.RAZORPAY_KEY_ID,
        settings.RAZORPAY_KEY_SECRET
    )
)


# =====================================
# 1. CREATE RAZORPAY ORDER
# =====================================

class CreateRazorpayOrderView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        order_id = request.data.get("order_id")

        try:
            order = Order.objects.get(
                id=order_id,
                user=request.user
            )

        except Order.DoesNotExist:

            return Response(
                {
                    "error": "Order not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        if hasattr(order, "payment"):

            return Response(
                {
                    "error": "Payment already exists"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        amount = int(order.total_amount * 100)

        razorpay_order = client.order.create(
            data={
                "amount": amount,
                "currency": "INR",
                "receipt": f"order_{order.id}"
            }
        )

        payment = Payment.objects.create(
            order=order,
            user=request.user,
            payment_method="RAZORPAY",
            payment_status="PENDING",
            amount=order.total_amount,
            razorpay_order_id=razorpay_order["id"]
        )

        return Response(
            {
                "message": "Razorpay order created",
                "key": settings.RAZORPAY_KEY_ID,
                "razorpay_order_id": razorpay_order["id"],
                "amount": amount,
                "currency": "INR",
                "payment_id": payment.id
            },
            status=status.HTTP_201_CREATED
        )


# =====================================
# 2. VERIFY RAZORPAY PAYMENT
# =====================================

class VerifyRazorpayPaymentView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        razorpay_order_id = request.data.get(
            "razorpay_order_id"
        )

        razorpay_payment_id = request.data.get(
            "razorpay_payment_id"
        )

        razorpay_signature = request.data.get(
            "razorpay_signature"
        )

        try:

            payment = Payment.objects.get(
                razorpay_order_id=razorpay_order_id,
                user=request.user
            )

        except Payment.DoesNotExist:

            return Response(
                {
                    "error": "Payment record not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        try:

            client.utility.verify_payment_signature(
                {
                    "razorpay_order_id": razorpay_order_id,
                    "razorpay_payment_id": razorpay_payment_id,
                    "razorpay_signature": razorpay_signature
                }
            )

        except razorpay.errors.SignatureVerificationError:

            payment.payment_status = "FAILED"
            payment.save()

            return Response(
                {
                    "error": "Payment verification failed"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        payment.razorpay_payment_id = razorpay_payment_id
        payment.razorpay_signature = razorpay_signature
        payment.payment_status = "PAID"

        payment.save()

        return Response(
            {
                "message": "Payment verified successfully",
                "payment_id": payment.id,
                "status": "PAID"
            },
            status=status.HTTP_200_OK
        )
class CreatePaymentView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        order_id = request.data.get("order_id")

        try:
            order = Order.objects.get(
                id=order_id,
                user=request.user
            )

        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        if hasattr(order, "payment"):
            return Response(
                {"error": "Payment already exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        payment = Payment.objects.create(
            order=order,
            user=request.user,
            payment_method="Cash on Delivery",
            payment_status="PENDING",
            amount=order.total_amount,
        )

        return Response(
            {
                "message": "COD Payment Created",
                "payment_id": payment.id,
            },
            status=status.HTTP_201_CREATED,
        )