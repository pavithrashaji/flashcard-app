from django.shortcuts import render

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from .models import User, Flashcard
from .serializers import UserSerializer, FlashcardSerializer

class UserCreateView(generics.ListCreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	
class UserDisplayView(generics.RetrieveUpdateDestroyAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	
class FlashcardCreateView(generics.ListCreateAPIView):
	queryset = Flashcard.objects.all()
	serializer_class = FlashcardSerializer

class FlashcardDisplayView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Flashcard.objects.all()
	serializer_class = FlashcardSerializer
