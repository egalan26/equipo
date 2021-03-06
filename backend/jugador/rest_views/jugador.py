from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from jugador.models import Persona

class ListJugador(APIView):
    def get(self, request, format=None):
        usernames = [user.username for user in Persona.objects.all()]
        return Response(usernames)
