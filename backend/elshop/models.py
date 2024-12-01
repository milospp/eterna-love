from django.db import models


POSTER_ITEM_CHOICES = [
    ('PL_1_DOUBLE_TEXT', 'PL_1_DOUBLE_TEXT'),
    ('PL_1_EMOJI', 'PL_1_EMOJI'),
    ('PL_2_FIRST_MESSAGE', 'PL_2_FIRST_MESSAGE'),
    ('PL_1_GM_TABLE', 'PL_1_GM_TABLE'),
    ('PL_1_GN_TABLE', 'PL_1_GN_TABLE'),
    ('PL_1_HOURS_CHART', 'PL_1_HOURS_CHART'),
    ('PL_2_ILY', 'PL_2_ILY'),
    ('PL_1_LONGEST_GHOST', 'PL_1_LONGEST_GHOST'),
    ('PL_1_RESPONSE_TIME', 'PL_1_RESPONSE_TIME'),
    ('PL_1_LAUGH', 'PL_1_LAUGH'),
    ('PL_1_SENT_IMAGE', 'PL_1_SENT_IMAGE'),
    ('PL_1_SENT_REELS', 'PL_1_SENT_REELS'),
    ('PL_1_SENT_VIDEO', 'PL_1_SENT_VIDEO'),
    ('PL_1_TIME_SPENT', 'PL_1_TIME_SPENT'),
    ('PL_2_TIMELINE', 'PL_2_TIMELINE'),
    ('PL_1_TOTAL_BAR', 'PL_1_TOTAL_BAR'),
    ('PL_1_TOTAL_HEART', 'PL_1_TOTAL_HEART'),
    ('PL_1_VOICE', 'PL_1_VOICE'),
    ('PL_2_WEEK_PIE', 'PL_2_WEEK_PIE'),
    ('PL_1_WORDS', 'PL_1_WORDS'),
    ('M_1_EMOJI', 'M_1_EMOJI'),
    ('M_1_FIRST_MESSAGE', 'M_1_FIRST_MESSAGE'),
    ('M_1_GM_TABLE', 'M_1_GM_TABLE'),
    ('M_1_GMGN_CHART', 'M_1_GMGN_CHART'),
    ('M_1_GN_TABLE', 'M_1_GN_TABLE'),
    ('M_2_HOURS_CHART', 'M_2_HOURS_CHART'),
    ('M_1_ILY', 'M_1_ILY'),
    ('M_1_LAUGH', 'M_1_LAUGH'),
    ('M_1_SENT_REELS', 'M_1_SENT_REELS'),
    ('M_1_SENT_TIKTOK', 'M_1_SENT_TIKTOK'),
    ('M_1_TIME_SPENT', 'M_1_TIME_SPENT'),
    ('M_2_TIMELINE', 'M_2_TIMELINE'),
    ('M_1_TOTAL_BAR', 'M_1_TOTAL_BAR'),
    ('M_1_TOTAL_HEART', 'M_1_TOTAL_HEART'),
    ('M_1_VOICE', 'M_1_VOICE'),
    ('M_2_WEEK_BAR', 'M_2_WEEK_BAR'),
    ('M_1_WORDS', 'M_1_WORDS'),
    ('C_1_DOUBLE_TEXT', 'C_1_DOUBLE_TEXT'),
    ('C_1_EMOJI', 'C_1_EMOJI'),
    ('C_1_FIRST_MESSAGE', 'C_1_FIRST_MESSAGE'),
    ('C_1_GMGN_CHART', 'C_1_GMGN_CHART'),
    ('C_1_GMGN_TABLE', 'C_1_GMGN_TABLE'),
    ('C_1_HOURS_CHART', 'C_1_HOURS_CHART'),
    ('C_1_ILY', 'C_1_ILY'),
    ('C_1_LAUGH', 'C_1_LAUGH'),
    ('C_1_LONGEST_GHOST', 'C_1_LONGEST_GHOST'),
    ('C_1_RESPONSE_TIME', 'C_1_RESPONSE_TIME'),
    ('C_1_SENT_MEDIA2', 'C_1_SENT_MEDIA2'),
    ('C_1_SENT_MEDIA', 'C_1_SENT_MEDIA'),
    ('C_1_SENT_REELS', 'C_1_SENT_REELS'),
    ('C_1_SENT_TIKTOK', 'C_1_SENT_TIKTOK'),
    ('C_1_TIME_SPENT', 'C_1_TIME_SPENT'),
    ('C_2_TIMELINE', 'C_2_TIMELINE'),
    ('C_1_TOTAL_PIE', 'C_1_TOTAL_PIE'),
    ('C_1_VOICE', 'C_1_VOICE'),
    ('C_1_WEEK_BAR', 'C_1_WEEK_BAR'),
    ('C_2_WEEK_PIE', 'C_2_WEEK_PIE'),
]

POSTER_LAYOUT_CHOICES = [
    ('1_1', '1'),
    ('1_2', '2'),
    ('2_2', '4'),
    ('2_3', '5'),
    ('3_3', '9'),
    ('3_4', '12')
]

POSTER_FORMAT_CHOICES = [
    ('DIGITAL', 'digital'),
    ('A5', 'A5'),
    ('A4', 'A4'),
    ('A3', 'A3')
]

POSTER_PAPER_TYPE_CHOICES = [
    ('MATT', 'Matt'),
    ('GLOSSY', 'Glossy')
]

POSTER_FRAME_CHOICES = [
    ('NO', 'No'),
    ('ANY', 'Any'),
    ('ANYA3', 'Any A3'),
    ('ANYA4', 'Any A4'),
    ('ANYA5', 'Any A5'),
]

ORDER_STATUS_CHOICES = [
    ('PENDING', 'Pending'),
    ('DRAFT', 'Draft'),
    ('IN_PROGRESS', 'Any'),
    ('PAID_PAYPAL', 'Paid PP'),
    ('PAID', 'Paid'),
    ('SHIPPED', 'Shipped'),
]


class ContactData(models.Model):
    id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    street = models.CharField(max_length=100, null=True, blank=True)
    streetNumber = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    zip = models.CharField(max_length=20, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"{self.fullname} - {self.email}"


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    invoice_id = models.CharField(max_length=20) # Should be unique
    contact_info = models.ForeignKey(ContactData, on_delete=models.CASCADE, related_name='contact_orders')
    shipping_info = models.ForeignKey(ContactData, on_delete=models.CASCADE, null=True, blank=True, related_name='shipping_orders')
    shipping_info_form = models.CharField(max_length=10, choices=[('SAME', 'Same'), ('DIFFERENT', 'Different')], null=True, blank=False)
    payment_method = models.CharField(max_length=20, choices=[('UPON_DELIVERY', 'Upon Delivery'), ('BANK_TRANSFER', 'Bank Transfer'), ('CARD', 'Card'), ('PAYPAL', 'PayPal'), ('APPLE_PAY', 'Apple Pay')], null=False, blank=False)

    status = models.CharField(max_length=50, default=ORDER_STATUS_CHOICES[0], choices=ORDER_STATUS_CHOICES)
    is_order_placed = models.BooleanField(default=False)

    description = models.TextField(null=True, blank=True)
    data = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.invoice_id}"


class CartItem(models.Model):
    id = models.AutoField(primary_key=True)
    reference_id = models.CharField(max_length=20)
    item_name = models.CharField(max_length=100)

    person_1 = models.CharField(max_length=100, null=True, blank=True)
    person_2 = models.CharField(max_length=100, null=True, blank=True)
        
    poster_layout = models.CharField(max_length=10, choices=POSTER_LAYOUT_CHOICES, null=True, blank=False)

    quantity = models.PositiveIntegerField()
    
    # posterItems = models.ForeignKey(PosterItem, on_delete=models.CASCADE, null=True, blank=True)
    poster_format = models.CharField(max_length=10, choices=POSTER_FORMAT_CHOICES, null=False, blank=False, default='DIGITAL')
    poster_paper_type = models.CharField(max_length=10, choices=POSTER_PAPER_TYPE_CHOICES, null=True, blank=True)
    poster_frame = models.CharField(max_length=10, choices=POSTER_FRAME_CHOICES, null=True, blank=True)
    results = models.JSONField(null=True, blank=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='cart_items', null=True, blank=True)

    def __str__(self):
        return f"{self.item_name} - {self.quantity}"


class PosterItem(models.Model):
    id = models.AutoField(primary_key=True)
    poster_item_type = models.CharField(max_length=25, choices=POSTER_ITEM_CHOICES, null=False, blank=False)
    cart_item = models.ForeignKey(CartItem, related_name='poster_items', on_delete=models.CASCADE)
