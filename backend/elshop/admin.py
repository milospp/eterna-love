from django.contrib import admin
from .models import Order, ContactData, CartItem, PosterItem


from django.db import models
from django import forms

# Register your models here.
admin.site.register(ContactData)
# admin.site.register(CartItem)
admin.site.register(PosterItem)
# admin.site.register(Order)



class PosterItemLine(admin.TabularInline):
    model = PosterItem
    extra = 1

class CartItemInline(admin.StackedInline):
    model = CartItem
    extra = 1
    show_change_link = True
    show_full_result_count = True
    view_on_site = True

    
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    inlines = [
        CartItemInline
    ]
    
    list_display = ('id', 'status', 'created_at')


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    inlines = [
        PosterItemLine
    ]

    list_display = ('reference_id', 'item_name', 'person_1', 'person_2')

# class CartItemInline(admin.TabularInline):
#     model = CartItem
#     extra = 1
    
    
# @admin.register(Order)
# class OrderAdmin(admin.ModelAdmin):
#     inlines = [
#         CartItemInline,
#     ]
    
#     # formfield_overrides = {
#     #     models.TextField: {"data": {"widget": forms.Textarea(attrs={"rows": 1, "cols": 40})}},
#     # }
    
#     # fields = ('customer_name', 'product', 'quantity', 'data', 'payment_data')
#     list_display = ('id', 'customer_name', 'product', 'quantity', 'status', 'created_at')
#     list_display_links = ('id', 'customer_name')
#     # list_editable = ('status', 'product')
#     # list_select_related = ('contact')
#     search_fields = ('customer_name', 'product')
#     list_filter = ('status', 'created_at')
#     actions = ['mark_as_delivered']
    
    