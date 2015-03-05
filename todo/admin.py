from django.contrib import admin
from todo.models import ToDo, ToDoList


class ToDoAdmin(admin.ModelAdmin):
    fields = ['done', 'title']

    list_display = ('done', 'title', 'date_created')

admin.site.register(ToDo, ToDoAdmin)


class ToDoListAdmin(admin.ModelAdmin):
    fields = ['title']

    list_display = ('title', 'date_created')

admin.site.register(ToDoList, ToDoListAdmin)
