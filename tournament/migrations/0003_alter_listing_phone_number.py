# Generated by Django 4.0.6 on 2022-07-16 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament', '0002_listing_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='phone_number',
            field=models.CharField(max_length=12),
        ),
    ]