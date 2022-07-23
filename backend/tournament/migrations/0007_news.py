# Generated by Django 4.0.6 on 2022-07-22 22:54

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('tournament', '0006_featuredplayer'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('uuid', models.UUIDField(auto_created=True, default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=50)),
                ('image', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('article', models.CharField(max_length=2000)),
                ('description', models.CharField(max_length=200)),
            ],
        ),
    ]