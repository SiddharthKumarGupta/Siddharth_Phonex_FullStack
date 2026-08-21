from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny

from .models import Product
from .serializers import ProductSerializer


class ProductListView(ListAPIView):

    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):

        queryset = Product.objects.filter(
            is_available=True
        )

        category = self.request.query_params.get("category")

        if category:
            queryset = queryset.filter(
                category__iexact=category
            )

        return queryset


class ProductDetailView(RetrieveAPIView):

    queryset = Product.objects.filter(
        is_available=True
    )

    serializer_class = ProductSerializer
    permission_classes = [AllowAny]