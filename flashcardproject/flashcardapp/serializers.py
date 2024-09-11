from rest_framework import serializers
from .models import User, Flashcard

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'

class FlashcardSerializer(serializers.ModelSerializer):
	class Meta:
		model = Flashcard
		fields = '__all__'