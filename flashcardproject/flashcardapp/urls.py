from django.urls import path
from .views import UserCreateView, UserDisplayView, FlashcardCreateView, FlashcardDisplayView

urlpatterns = [
    path('users/', UserCreateView.as_view(), name='user-create'),
	path('users/<int:pk>/', UserDisplayView.as_view(), name='user-display'),

    path('flashcards/', FlashcardCreateView.as_view(), name='flashcard-create'),
	path('flashcards/<int:pk>/', FlashcardDisplayView.as_view(), name='flashcard-display'),
]