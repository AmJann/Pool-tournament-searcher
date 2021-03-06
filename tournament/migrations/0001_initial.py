# Generated by Django 4.0.5 on 2022-07-02 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('director', models.CharField(default='name', max_length=100)),
                ('phone_number', models.IntegerField(max_length=12)),
                ('email', models.EmailField(max_length=50)),
                ('venue', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=20)),
                ('zipcode', models.IntegerField(max_length=15)),
                ('date', models.DateField()),
                ('sign_up_time', models.CharField(max_length=10)),
                ('start_time', models.CharField(max_length=10)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
    ]
