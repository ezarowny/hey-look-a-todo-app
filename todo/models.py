from django.contrib.auth.models import User
from django.db import models


class ToDo(models.Model):
    done = models.BooleanField(default=False)
    title = models.CharField(max_length=256)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name='todos')
    todo_list = models.ForeignKey('ToDoList', related_name='todos')

    def __unicode__(self):
        return self.title


class ToDoList(models.Model):
    title = models.CharField(max_length=256)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name='todo_lists')

    def __unicode__(self):
        return self.title
