from django.conf import settings
from django.db import models
from django.utils import timezone

# class Category(models.Model):
#     lang_type = models.CharField(max_length=50)

#     def __str__(self):
#         return self.lang_type

#     class Meta:
#             db_table = 'categories'

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, name = "編集者名")
    name = models.CharField("サークル名", max_length=200)
    num = models.IntegerField("部員数")
    money = models.IntegerField("部費")
    place = models.CharField("活動場所", max_length=50)
    time = models.CharField("活動時間", max_length=50)
    image = models.ImageField(upload_to='images/')
    mail = models.EmailField("メールアドレス")
    twitter = models.SlugField("twitter", blank=True, null=True)
    insta = models.SlugField("instagram", blank=True, null=True)
    category = models.CharField("カテゴリ", choices = settings.CATEGORIES, max_length = 3)
    text = models.TextField("活動内容，紹介文　　　　(100文字以内)")
    created_date = models.DateTimeField("編集日時", default=timezone.now)
    published_date = models.DateTimeField("公開日時")



    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name