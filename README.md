# Emanuel Corrêa - Developer Portfolio

> Um portfólio interativo desenvolvido para demonstrar habilidades em Engenharia de Software, Full Stack Development e Visão Computacional.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

## 🌐 Live Demo
👉 **[Acesse o portfólio online aqui](https://emanuel-correa-portifolio.vercel.app/)**

---

##  Funcionalidades

O projeto foi construído com foco em performance, acessibilidade e estética moderna ("Hacker Chic" vs "Clean Minimalist").

- **Temas Dinâmicos:** Sistema de *Dark/Light Mode* manual utilizando Variáveis CSS e persistência via LocalStorage.
- **Performance Extrema:** Build otimizado com Vite e componentes lazy-loaded.
- **Micro-interações:** Animações fluidas de entrada e hover utilizando **Framer Motion**.
- **Responsividade:** Layout totalmente adaptável para Mobile, Tablet e Desktop.
- **Clean Architecture:** Estrutura de pastas organizada para escalabilidade.

##  Tech Stack

- **Core:** React 18, TypeScript
- **Estilização:** Tailwind CSS v3, CSS Variables
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Build Tool:** Vite
- **Package Manager:** Yarn

##  Estrutura do Projeto

```bash
src/
├── components/   # Componentes reutilizáveis (Cards, Botões)
├── lib/          # Utilitários (CSS merge, helpers)
├── styles/       # Configurações globais do Tailwind
├── App.tsx       # Lógica principal e rotas
└── main.tsx      # Ponto de entrada
