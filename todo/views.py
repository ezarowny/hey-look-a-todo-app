from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

from todo.models import ToDo
from todo.permissions import IsOwner
from todo.serializers import ToDoSerializer


class ToDoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ToDos to be viewed or edited.
    """
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    permission_classes = (IsAuthenticated, IsOwner)

    def get_queryset(self):
        user = self.request.user
        return ToDo.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
