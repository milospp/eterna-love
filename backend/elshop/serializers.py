from rest_framework import serializers
from .models import Order

from .models import Order, CartItem, PosterItem, ContactData


def generate_invoice_id():
    return 6
    # last_order = Order.objects.all().order_by('id').last()
    # last_id = last_order.id
    # new_invoice_id = f'EL-{last_id:04d}'
    # return new_invoice_id


class ContactDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactData
        fields = '__all__'


class PosterItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PosterItem
        fields = ['poster_item_type']


class CartItemSerializer(serializers.ModelSerializer):
    poster_items = PosterItemSerializer(many=True)

    def create(self, validated_data):
        poster_items_data = validated_data.pop('poster_items')
        cart_item = CartItem.objects.create(**validated_data)
        for poster_item_data in poster_items_data:
            PosterItem.objects.create(**poster_item_data, cart_item=cart_item)
        return cart_item

    class Meta:
        model = CartItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True)
    contact_info = ContactDataSerializer()
    shipping_info = ContactDataSerializer(required=False)
    invoice_id = serializers.CharField(default=generate_invoice_id)
    # status = serializers.CharField(default='draft', read_only=True)

    def create(self, validated_data):
        cart_items_data = validated_data.pop('cart_items')
        contact_info_data = validated_data.pop('contact_info')
        contact_info = ContactData.objects.create(**contact_info_data)

        shipping_info_data = validated_data.pop('shipping_info', None)
        shipping_info = ContactData.objects.create(**shipping_info_data) if shipping_info_data else None

        order = Order.objects.create(**validated_data, contact_info=contact_info, shipping_info=shipping_info)
        order.save()
        for cart_item_data in cart_items_data:
            serializer = CartItemSerializer(data=cart_item_data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(order=order)
        return order

    class Meta:
        model = Order
        fields = '__all__'