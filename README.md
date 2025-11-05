---

# 🌐 Plataforma ONG — Entrega II 

## 🎯 Objetivo Geral

O projeto **Plataforma ONG** tem como objetivo criar uma aplicação web moderna, acessível e interativa, que conecta pessoas a causas sociais.
Nas entregas II e III, foram aplicadas as tecnologias **CSS3** e **JavaScript Avançado** para evoluir de uma interface estática para uma **Single Page Application (SPA)** funcional.

---

## 🧩 **Entrega II — CSS3**

### 🎨 Sistema de Design

* Variáveis CSS customizadas para facilitar a manutenção do tema.
* Paleta de **8 cores** (primárias, secundárias e neutras).
* Hierarquia tipográfica com **5 tamanhos de fonte**.
* Sistema de espaçamento modular (8px, 16px, 24px, 32px, 48px, 64px).
  📄 Arquivo principal: `css/variables.css`

### 🧱 Leiaute Responsivo (Grid + Flexbox)

* Estrutura geral construída com **CSS Grid (12 colunas)**.
* Componentes internos e seções usando **Flexbox**.
* **5 breakpoints** para adaptação em diferentes tamanhos de tela.
* Layouts específicos para hero, cards, seções laterais e formulários.
  📄 Arquivo principal: `css/layout.css`

### 🧭 Navegação Interativa

* Menu principal responsivo com **submenu dropdown**.
* Navegação mobile com **menu hambúrguer**.
* Interatividade inicial implementada via JavaScript.
  📄 Arquivo JS: `js/script.js`

### 💡 Componentes de Interface

* **Cards responsivos** para exibição de projetos.
* **Botões com estados visuais** (hover, focus, active, disabled).
* **Formulários estilizados** com validação visual.
* **Componentes de feedback** (modals, toasts, alerts).
* **Badges e tags** para categorização de conteúdo.
  📄 Arquivo principal: `css/components.css`

### 🗂️ Estrutura de Pastas (Entrega II)

```
Plataforma_ONG/
│
├── index.html
├── sobre.html
├── contato.html
│
├── css/
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   └── banner.jpg
│
└── README.md
```

---

## ⚙️ **Entrega III — JavaScript Avançado**

### 🔁 SPA (Single Page Application)

Implementação de um sistema de rotas com **hash-router** para navegação dinâmica entre páginas:

* `#/` — Página inicial
* `#/projetos` — Listagem e cadastro de projetos
* `#/cadastro` — Formulário de voluntários

📄 Arquivos principais: `index.html`, `js/router.js`, `js/templates.js`

### 🧱 Templates JavaScript

Utilização da tag `<template>` no HTML e renderização dinâmica via JavaScript.
📄 Arquivo: `js/templates.js`

### 🧮 Manipulação do DOM

Atualização dinâmica de conteúdo sem recarregar a página, exibindo formulários, listas e feedbacks ao usuário.

### ✅ Validação de Formulários

* Verificação de campos obrigatórios e padrões (`pattern`, `email`).
* Feedback visual de erro e mensagens via **toasts**.
  📄 Arquivo: `js/validation.js`

### 💾 Armazenamento Local (localStorage)

* Cadastro e persistência de **voluntários** e **projetos** no navegador.
* Função de limpeza e atualização automática das listas.

### 🧱 Estrutura de Pastas (Entrega III)

```
Plataforma_ONG/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── router.js
│   ├── templates.js
│   ├── validation.js
│   ├── cadastro.js
│   └── projetos.js
│
└── README.md
```

---

## 🖥️ **Como Executar o Projeto**

1. Faça o download do repositório ou clone via Git:

   ```bash
   git clone https://github.com/SEU_USUARIO/Plataforma_ONG.git
   ```
2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge ou Firefox).
3. Navegue pelos menus da SPA (`Home`, `Projetos`, `Cadastro`).
4. Os dados inseridos são salvos automaticamente no **localStorage**.





