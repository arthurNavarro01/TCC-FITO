from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from django.db.models import Count
from .models import Documento, Caixa
from .serializers import DocumentoSerializer, CaixaSerializer

# Create your views here.

class DocumentoViewSet(viewsets.ModelViewSet):
    queryset = Documento.objects.all()
    serializer_class = DocumentoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CaixaViewSet(viewsets.ModelViewSet):
    queryset = Caixa.objects.all()
    serializer_class = CaixaSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def dashboard(request):
    total_documentos = Documento.objects.count()
    total_caixas = Caixa.objects.count()
    caixas_disponiveis = Caixa.objects.filter(disponivel=True).count()
    caixas_indisponiveis = Caixa.objects.filter(disponivel=False).count()
    documentos_por_tipo = (
        Documento.objects.values('tipo').annotate(total=Count('id')).order_by('tipo')
    )
    return Response({
        'total_documentos': total_documentos,
        'total_caixas': total_caixas,
        'caixas_disponiveis': caixas_disponiveis,
        'caixas_indisponiveis': caixas_indisponiveis,
        'documentos_por_tipo': list(documentos_por_tipo),
    })
