from django.db import models


class ToDo(models.Model):
    done = models.BooleanField(default=False)
    title = models.CharField(max_length=256)
    date_created = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.title
