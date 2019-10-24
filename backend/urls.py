
from django.contrib import admin
from django.conf.urls import url

web_patterns = [
]

urlpatterns = [
    url('admin/', admin.site.urls),
] + web_patterns
