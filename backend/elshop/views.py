from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .models import Order
from .serializers import OrderSerializer
# Create your views here.


class Test(APIView):
    def get(self, request):

        return HttpResponse('Hello, world. You\'re at the polls view.')


class TestTwo(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class TestTwoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
