from django.conf.urls import patterns, include, url
from django.contrib import admin

from rest_framework import routers

from todo import views

router = routers.DefaultRouter()
router.register(r'todo', views.ToDoViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'hey_look_a_todo_app.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^', include('utils.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
)
