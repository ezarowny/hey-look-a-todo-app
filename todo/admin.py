from django.contrib import admin
from todo.models import ToDo

class TodoAdmin(admin.ModelAdmin):
    fields = ['done', 'title']

    list_display = ('done', 'title', 'date_created')

admin.site.register(ToDo, TodoAdmin)
