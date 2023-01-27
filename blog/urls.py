from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add_edit', views.add_edit, name='add_edit'),
    path('search_page', views.search_page, name='search_page'),
    path('post_list', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.club_detail, name='club_detail'),
]