# Generated by Django 5.1.3 on 2024-11-29 23:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('elshop', '0003_rename_chart_item_posteritem_cart_item'),
    ]

    operations = [
        migrations.RenameField(
            model_name='posteritem',
            old_name='item_type',
            new_name='poster_item_type',
        ),
    ]
