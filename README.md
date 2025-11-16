# 🌐 Plataforma ONG — Entregas II, III e IV

## 🎯 Objetivo Geral
O projeto **Plataforma ONG** tem como propósito criar uma aplicação web moderna e acessível para conectar pessoas e organizações do terceiro setor.  
A aplicação evoluiu, ao longo das entregas, de uma estrutura HTML estática até uma **SPA (Single Page Application)** totalmente funcional, com boas práticas de **versionamento, acessibilidade (WCAG 2.1)** e **otimização para produção**.

---

## 🧩 **Entrega II — CSS3 (Interface e Design System)**

### 🎨 Sistema de Design
- Variáveis CSS customizadas para facilitar manutenção do tema.  
- Paleta de **8 cores** (primárias, secundárias e neutras).  
- Hierarquia tipográfica com **5 níveis de fonte**.  
- Sistema de espaçamento modular (8px → 64px).  
📄 `css/variables.css`

### 🧱 Layout Responsivo
- Estrutura em **CSS Grid (12 colunas)** e **Flexbox**.  
- **5 breakpoints** para dispositivos móveis, tablets e desktops.  
- Layouts dedicados para **hero**, **cards**, **formulários** e **seções laterais**.  
📄 `css/layout.css`

### 🧭 Navegação e Componentes
- Menu principal responsivo com **submenu** e **menu hambúrguer**.  
- **Cards**, **botões interativos**, **formulários estilizados** e **toasts**.  
- Interatividade inicial com JavaScript.  
📄 `css/components.css` e `js/script.js`

---

## ⚙️ **Entrega III — JavaScript Avançado (SPA e Funcionalidades)**

### 🔁 SPA (Single Page Application)
- Sistema de **rotas hash-based** (`#/`, `#/projetos`, `#/cadastro`).  
- Navegação dinâmica sem recarregar a página.  
📄 `js/router.js`, `js/templates.js`

### 🧮 Manipulação do DOM
- Atualização dinâmica de conteúdo (inserção de templates).  
- Feedback visual ao usuário em tempo real.

### ✅ Validação de Formulários
- Verificação de campos obrigatórios e padrões (`pattern`, `email`).  
- Feedback visual de erro e **mensagens toast**.  
📄 `js/validation.js`

### 💾 Armazenamento Local
- Persistência de dados no **localStorage** (cadastros e projetos).  
- Funções para limpar, atualizar e renderizar listas automaticamente.  
📄 `js/cadastro.js`, `js/projetos.js`

---

## 🚀 **Entrega IV — Versionamento, Acessibilidade e Produção**

### 🧭 Controle de Versão com Git/GitHub
- Fluxo de versionamento baseado no **GitFlow**:
  - `main` → versão estável (produção)
  - `develop` → desenvolvimento principal
  - `feature/*` → novas funcionalidades
  - `release/*` → versões candidatas
  - `hotfix/*` → correções rápidas
- **Commits semânticos** no formato:
  ```
  feat: adiciona validação de CPF
  fix: corrige erro de navegação entre rotas
  docs: atualiza instruções de deploy
  ```
- Criação de **releases versionadas** (`v1.0.0`, `v1.1.0`, `v2.0.0`) e histórico documentado.
- Uso de **Issues** e **Milestones** para controle de tarefas e bugs.
- Pull Requests com revisão e histórico de merges rastreável.

### ♿ Acessibilidade (WCAG 2.1 Nível AA)
- Navegação completa por teclado (`Tab`, `Enter`, `Esc`);  
- Estrutura semântica com tags `<main>`, `<header>`, `<nav>`, `<section>`, `<footer>`;  
- Contraste mínimo **4.5:1** para texto normal;  
- **Modo escuro** e **modo alto contraste** ativáveis por botão;  
- Textos alternativos (`alt`) em todas as imagens;  
- Suporte a **leitores de tela (NVDA, VoiceOver)** com atributos `aria-*`.

### ⚡ Otimização para Produção
- **Minificação** de HTML, CSS e JS (via build tools).  
- **Compressão de imagens** (WebP e otimização de PNG/JPG).  
- Redução de payload e melhoria de performance no Lighthouse.  
- Estrutura de deploy pronta para GitHub Pages, Netlify ou Vercel.

---

## 🗂️ Estrutura Final do Projeto

```
Plataforma_ONG/
│
├── index.html
│
├── css/
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── style.css
│
├── js/
│   ├── main.js
│   ├── router.js
│   ├── templates.js
│   ├── validation.js
│   ├── cadastro.js
│   ├── projetos.js
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── banner.jpg
│   └── icons/
│
└── README.md
```

---

## 🖥️ **Como Executar Localmente**

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/Plataforma_ONG.git
   cd Plataforma_ONG
   ```
2. Abra `index.html` em um navegador moderno  
   *(ou utilize um servidor local para testar o SPA)*:
   ```bash
   npx http-server
   # ou
   python -m http.server
   ```
3. Explore o sistema: cadastre voluntários, registre projetos e teste o modo acessível.

---

## 🌎 **Deploy**
O projeto pode ser hospedado diretamente no **GitHub Pages**, **Vercel** ou **Netlify**.  
Versões otimizadas e minificadas ficam disponíveis na branch `release/production`.

---

## ✅ **Requisitos Atendidos**

| Categoria | Critério | Status |
|------------|-----------|--------|
| **Design e Responsividade** | Sistema de Design, Grid e Flexbox | ✅ |
| **Interatividade** | SPA, Manipulação do DOM | ✅ |
| **Validação e Armazenamento** | Formulários e LocalStorage | ✅ |
| **Versionamento** | GitFlow, commits e releases | ✅ |
| **Acessibilidade** | WCAG 2.1 AA, contraste, teclado, leitores de tela | ✅ |
| **Otimização** | Minificação e compressão de imagens | ✅ |
| **Documentação** | README completo e técnico | ✅ |

---

## 👩‍💻 **Desenvolvido por**

**Lívia de Souza Carvalho**  
Curso: **Análise e Desenvolvimento de Sistemas**  
Instituição: **Universidade Cruzeiro do Sul**  
