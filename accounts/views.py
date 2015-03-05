from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.template.response import TemplateResponse

from todo.models import ToDoList


def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            username = form.clean_username()
            password = form.clean_password2()
            form.save()

            user = authenticate(username=username, password=password)
            login(request, user)

            ToDoList.objects.create(title='ToDos', user=user)

            return HttpResponseRedirect('/')
    else:
        form = UserCreationForm()

    context = {
        'form': form,
    }

    return TemplateResponse(request, 'accounts/signup.html', context)
