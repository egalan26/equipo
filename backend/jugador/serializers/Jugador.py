from django.contrib.auth.models import User, Group
from back-end.jug
from rest_framework import serializers


class PersonaSerializer(serializers.Serializers):
    class Meta:
        model = Persona
        fields = ['__all__']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
