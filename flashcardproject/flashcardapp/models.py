from django.db import models

class User(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField(unique=True)
    password = models.CharField()

class Flashcard(models.Model):
    name = models.CharField(max_length=64, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    definition = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)