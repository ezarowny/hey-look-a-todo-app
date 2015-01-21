from rest_framework import serializers

from todo.models import ToDo


class ToDoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ToDo
        fields = ('done', 'title')
