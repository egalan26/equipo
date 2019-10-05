from django.db import models
from base.models import SimpleModel, NamedModel


class Persona(SimpleModel):
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    tfno = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    def __str__(self):
        return self.first_name
