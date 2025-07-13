# Sistema de Arquivo Morto

Frontend moderno para gerenciamento de arquivo morto físico, desenvolvido em React + MUI, com visual premium, dark mode, cards informativos e dashboard profissional.

## 🚀 Tecnologias Utilizadas
- React 18 + TypeScript
- Material-UI (MUI)
- React Router
- Axios
- Chart.js
- DataGrid (MUI X)

## 🎨 Funcionalidades
- Login com visual impactante e dark mode
- Dashboard com cards de resumo, gráficos e status das caixas
- Listagem de documentos e caixas em cards, com status coloridos e ações rápidas
- Barra lateral (sidebar) moderna, responsiva e com botão de ação destacado
- Dark mode com transição suave e alternância global
- 100% em português

## 📦 Instalação e Execução

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
3. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 🔐 Autenticação
- Mock: qualquer usuário/senha faz login
- Token JWT simulado no localStorage

## 🖥️ Estrutura de Pastas
```
frontend/src/
├── components/     # Componentes React (Dashboard, Login, Caixas, Documentos, Layout)
├── services/       # Serviços de API (mock)
├── types/          # Tipos TypeScript
└── App.tsx         # Componente principal
```

## 🌗 Dark Mode
- Alternância entre claro e escuro em toda a aplicação
- Transição suave e visual consistente
- Botão de alternância no topo e na tela de login

## 📑 Funcionalidades Detalhadas
- **Dashboard:** Cards de resumo, documentos recentes, status das caixas com barra de progresso
- **Documentos:** Cards com status coloridos, ações de editar/excluir, formulário modal
- **Caixas:** Cards com ocupação, status, barra de progresso, ações rápidas
- **Sidebar:** Ícones, botão de novo documento, navegação clara

## 🛠️ Scripts Disponíveis
- `npm start` — Inicia o frontend em modo desenvolvimento
- `npm run build` — Gera build de produção

## 📄 Licença
Projeto acadêmico para TCC — FITO. Uso livre para fins educacionais.

---

Desenvolvido por Arthur Navarro — 2024 