from rest_framework import serializers

from todo.models import ToDo, ToDoList


class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo


class ToDoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoList
