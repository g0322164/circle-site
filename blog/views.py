from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post
from django.contrib import messages
from django.db.models import Q

def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def club_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/club_detail.html', {'post': post})

def index(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    return render(request, 'blog/index.html', {'posts': posts})

def add_edit(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/add_edit.html', {'posts': posts})

def search_page(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    keyword = request.GET.get('keyword')
    if keyword:
        posts = posts.filter(
                 Q(name__icontains=keyword)
               )
        messages.success(request, '「{}」の検索結果'.format(keyword))
    return render(request, 'blog/search_page.html', {'posts': posts})