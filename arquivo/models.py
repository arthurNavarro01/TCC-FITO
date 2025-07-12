from django.db import models

# Create your models here.

class Documento(models.Model):
    responsavel = models.CharField(max_length=100)
    setor = models.CharField(max_length=100)
    tipo = models.CharField(max_length=100)
    ano = models.IntegerField()
    status = models.CharField(max_length=50)
    data_arquivamento = models.DateField()
    arquivo_pdf = models.FileField(upload_to='documentos/', blank=True, null=True)

    def __str__(self):
        return f"{self.tipo} - {self.ano} ({self.status})"

class Caixa(models.Model):
    rua = models.CharField(max_length=100)
    estante = models.IntegerField()
    andar = models.IntegerField()
    posicao = models.IntegerField()
    documentos = models.ManyToManyField(Documento, related_name='caixas', blank=True)
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return f"Caixa {self.id} - Rua {self.rua}, Estante {self.estante}, Andar {self.andar}, Posição {self.posicao}"
