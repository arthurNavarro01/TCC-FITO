from rest_framework import serializers
from .models import Documento, Caixa

class DocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documento
        fields = '__all__'

class CaixaSerializer(serializers.ModelSerializer):
    documentos = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Documento.objects.all(), required=False
    )

    class Meta:
        model = Caixa
        fields = '__all__'

    def validate_documentos(self, value):
        if len(value) > 50:
            raise serializers.ValidationError('Uma caixa pode conter no máximo 50 documentos.')
        return value

    def validate(self, attrs):
        documentos = attrs.get('documentos', [])
        if self.instance:
            # Atualização: considerar documentos já existentes + novos
            current_count = self.instance.documentos.count()
            new_count = len(documentos)
            if new_count > 50:
                raise serializers.ValidationError({'documentos': 'Uma caixa pode conter no máximo 50 documentos.'})
        else:
            if len(documentos) > 50:
                raise serializers.ValidationError({'documentos': 'Uma caixa pode conter no máximo 50 documentos.'})
        return attrs 