from django.contrib import admin

from .models import Persona


class PersonaAdmin(admin.ModelAdmin):
    list_display = ("first_name", "tfno", "email")
    fields = (
        "first_name",
        "middle_name",
        "last_name",
        "tfno",
        "email",
    )
    read_only_fields = ("created", )
admin.site.register(Persona, PersonaAdmin)
