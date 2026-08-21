from django.urls import path

from .views import (
    CreatePaymentView,
    CreateRazorpayOrderView,
    VerifyRazorpayPaymentView,
)

urlpatterns = [

    path(
        "create/",
        CreatePaymentView.as_view(),
        name="create-payment",
    ),

    path(
        "create-order/",
        CreateRazorpayOrderView.as_view(),
        name="create-razorpay-order",
    ),

    path(
        "verify/",
        VerifyRazorpayPaymentView.as_view(),
        name="verify-payment",
    ),
]