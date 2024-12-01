from django.urls import path
from .views import Test, TestTwo

urlpatterns = [
    path('items/', Test.as_view(), name='test1'),
    path('items3/', Test.as_view(), name='test1'),
    
    path('items2/', TestTwo.as_view(), name='test1'),
    # path('api/items/<int:pk>/', TestTwo.as_view(), name='test2'),
]