from rest_framework import viewsets

from todo.models import ToDo
from todo.serializers import ToDoSerializer


class ToDoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ToDos to be viewed or edited.
    """
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
