from django.contrib import admin
from .models import Documento, Caixa

@admin.register(Documento)
class DocumentoAdmin(admin.ModelAdmin):
    list_display = ['tipo', 'ano', 'responsavel', 'setor', 'status', 'data_arquivamento']
    list_filter = ['tipo', 'ano', 'setor', 'status']
    search_fields = ['tipo', 'responsavel', 'setor']
    date_hierarchy = 'data_arquivamento'

@admin.register(Caixa)
class CaixaAdmin(admin.ModelAdmin):
    list_display = ['id', 'rua', 'estante', 'andar', 'posicao', 'disponivel', 'documentos_count']
    list_filter = ['rua', 'andar', 'disponivel']
    search_fields = ['rua']
    
    def documentos_count(self, obj):
        return obj.documentos.count()
    documentos_count.short_description = 'Documentos'
