# TCC - Sistema de Gerenciamento de Arquivo Morto

Sistema completo de gerenciamento de arquivo morto físico desenvolvido em Django REST Framework + React + Material-UI.

## 🚀 Tecnologias

### Backend
- **Django 5.2.4** + Django REST Framework
- **PostgreSQL** como banco de dados
- **JWT** para autenticação
- **CORS** para comunicação com frontend

### Frontend
- **React 18** com TypeScript
- **Material-UI (MUI)** para componentes
- **React Router** para navegação
- **Axios** para comunicação com API

## 📋 Pré-requisitos

- Python 3.8+
- Node.js 16+
- PostgreSQL
- pgAdmin 4 (opcional)

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd TCC-FITO
```

### 2. Configurar Backend (Django)

#### 2.1. Criar ambiente virtual
```bash
python -m venv venv
```

#### 2.2. Ativar ambiente virtual
```bash
# Windows
.\venv\Scripts\Activate.ps1

# Linux/Mac
source venv/bin/activate
```

#### 2.3. Instalar dependências
```bash
pip install -r requirements.txt
```

#### 2.4. Configurar banco PostgreSQL
- Crie um banco chamado `tcc_db`
- Usuário: `postgres`
- Senha: `fitodb`
- Host: `localhost`
- Porta: `5432`

#### 2.5. Executar migrações
```bash
python manage.py migrate
```

#### 2.6. Criar superusuário
```bash
python manage.py createsuperuser
```

#### 2.7. Iniciar servidor Django
```bash
python manage.py runserver
```

### 3. Configurar Frontend (React)

#### 3.1. Entrar no diretório do frontend
```bash
cd frontend
```

#### 3.2. Instalar dependências
```bash
npm install
```

#### 3.3. Iniciar servidor React
```bash
npm start
```

## 🌐 Acessos

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Admin Django**: http://localhost:8000/admin/

## 🔐 Autenticação

- **Usuário**: `admin` (ou o que você criou)
- **Senha**: (a que você definiu no Django)

## 📊 Estrutura do Sistema

### Models (Backend)
- **Documento**: responsavel, setor, tipo, ano, status, data_arquivamento, arquivo_pdf
- **Caixa**: rua, estante, andar, posicao, documentos (máx. 50), disponivel

### Páginas (Frontend)
- **Login**: Autenticação JWT
- **Dashboard**: Estatísticas e métricas
- **Documentos**: CRUD completo
- **Caixas**: CRUD completo

## 🔌 API Endpoints

### Autenticação
- `POST /api/token/` - Obter token JWT
- `POST /api/token/refresh/` - Renovar token JWT

### Documentos
- `GET /api/documentos/` - Listar documentos
- `POST /api/documentos/` - Criar documento
- `GET /api/documentos/{id}/` - Detalhes do documento
- `PUT /api/documentos/{id}/` - Atualizar documento
- `DELETE /api/documentos/{id}/` - Deletar documento

### Caixas
- `GET /api/caixas/` - Listar caixas
- `POST /api/caixas/` - Criar caixa
- `GET /api/caixas/{id}/` - Detalhes da caixa
- `PUT /api/caixas/{id}/` - Atualizar caixa
- `DELETE /api/caixas/{id}/` - Deletar caixa

### Dashboard
- `GET /api/dashboard/` - Estatísticas do sistema

## 🎯 Funcionalidades

### Backend
- ✅ CRUD completo para Documentos e Caixas
- ✅ Validação de máximo 50 documentos por caixa
- ✅ Autenticação JWT
- ✅ Dashboard com estatísticas
- ✅ Upload de arquivos PDF
- ✅ Interface administrativa do Django
- ✅ API REST completa
- ✅ CORS configurado

### Frontend
- ✅ Login/Autenticação com JWT
- ✅ Dashboard com estatísticas
- ✅ CRUD Documentos com DataGrid
- ✅ CRUD Caixas com DataGrid
- ✅ Layout responsivo com sidebar
- ✅ Tema Material-UI personalizado
- ✅ Rotas protegidas com autenticação
- ✅ Interceptors para refresh token

## 📁 Estrutura do Projeto

```
TCC - FITO/
├── TCC/                    # Configurações Django
├── arquivo/                # App principal
│   ├── models.py          # Models Documento e Caixa
│   ├── serializers.py     # Serializers DRF
│   ├── views.py           # ViewSets e views
│   ├── urls.py            # URLs da API
│   └── admin.py           # Admin Django
├── frontend/              # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── services/      # Serviços de API
│   │   ├── types/         # Tipos TypeScript
│   │   └── App.tsx        # Componente principal
│   └── package.json       # Dependências Node.js
├── requirements.txt        # Dependências Python
└── README.md              # Este arquivo
```

## 🚀 Desenvolvimento

### Backend
```bash
# Ativar ambiente virtual
.\venv\Scripts\Activate.ps1

# Executar migrações
python manage.py makemigrations
python manage.py migrate

# Iniciar servidor
python manage.py runserver
```

### Frontend
```bash
# Entrar no diretório
cd frontend

# Instalar dependências
npm install

# Iniciar servidor
npm start
```

## 🔧 Comandos Úteis

### Backend
```bash
# Criar migrações
python manage.py makemigrations arquivo

# Aplicar migrações
python manage.py migrate

# Criar superusuário
python manage.py createsuperuser

# Shell Django
python manage.py shell

# Coletar arquivos estáticos
python manage.py collectstatic
```

### Frontend
```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test
```

## 🎯 Próximos Passos

1. **Testes Unitários** (Jest + Django Tests)
2. **Testes E2E** (Cypress)
3. **PWA** com service workers
4. **Relatórios** em PDF
5. **Exportação** de dados
6. **Importação** em lote
7. **Notificações** push
8. **Filtros avançados**
9. **Sistema de busca**
10. **Backup automático**

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

## 📄 Licença

Este projeto foi desenvolvido para o TCC - Sistema de Gerenciamento de Arquivo Morto. 