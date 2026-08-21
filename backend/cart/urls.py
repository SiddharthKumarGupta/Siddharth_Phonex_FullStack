from django.urls import path
from .views import CartView
from .views import (
    CartView,
    UpdateCartItemView,
    RemoveCartItemView,
)

urlpatterns = [
    path(
        "",
        CartView.as_view(),
        name="cart"
    ),

    path(
        "<int:item_id>/update/",
        UpdateCartItemView.as_view(),
        name="update-cart"
    ),

    path(
        "<int:item_id>/remove/",
        RemoveCartItemView.as_view(),
        name="remove-cart"
    ),
]