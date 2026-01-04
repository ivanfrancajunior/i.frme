# I.FRME 📸

Bem-vindo ao repositório do **I.FRME**, um blog pessoal e portfólio de fotografia focado em estética minimalista e alta fidelidade visual (Pixel Perfect).

Construído com **Astro**, **Tailwind CSS** e **React**.

## 🚀 Como Rodar o Projeto

Pré-requisitos: Node.js instalado (v18+ recomendado).

```bash
# 1. Instalar dependências
npm install

# 2. Rodar servidor de desenvolvimento (http://localhost:4321)
npm run dev

# 3. Gerar build de produção (pasta /dist)
npm run build
```

---

## 📝 Guia de Postagens (Mini-Tutorial)

O conteúdo do blog é gerenciado através de arquivos **MDX** (Markdown + JSX).

### 1. Onde criar os posts?
Navegue até: `src/content/posts/`.
Crie um novo arquivo com a extensão `.mdx` (ex: `segunda-viagem.mdx`).

### 2. Cabeçalho (Frontmatter)
Todo post precisa começar com este bloco de metadados entre três traços (`---`):

```yaml
---
title: "Título do Seu Post"
pubDate: 2026-01-05
description: "Uma breve descrição que aparece logo abaixo do título."
author: "Seu Nome"
category: "Fotografia"
tags: ["viagem", "urbano"]
---
```

### 3. Escrevendo o Conteúdo e Regras Importantes
O MDX aceita Markdown comum (`# Título`, `**negrito**`), mas é **mais rigoroso** que o normal.
Siga estas regras para evitar erros de build:

*   **Quebras de linha**: Use sempre `<br />` (com a barra no final). Nunca use apenas `<br>`.
*   **Tags HTML**: Se abrir uma tag, tem que fechar.
    *   Certo: `<b>Texto</b>`
    *   Errado: `<b>Texto` (vai quebrar o site!)

### 4. 🖼️ Como Adicionar Imagens (Importante!)
Para usar imagens locais (da sua pasta `src/assets`), você deve **importá-las** como se fosse código.

1.  Coloque sua imagem na pasta `src/assets/posts/`.
2.  No seu arquivo `.mdx`, logo abaixo do cabeçalho (Frontmatter), faça o import:

```mdx
---
...frontmatter...
---
import minhaFoto from '../../assets/posts/nome-do-arquivo.avif';

# Título do Post

Aqui vai seu texto...

<!-- Para exibir a imagem: -->
<img src={minhaFoto.src} alt="Descrição da imagem" />
```

> **Por que assim?**
> Isso garante que o Astro otimize a imagem e encontre o caminho correto automaticamente, não importa onde o site esteja hospedado.

---

## 🛠️ Tecnologias Principais

*   **Astro 5.0**: Framework web focado em conteúdo.
*   **Astro Content Collections**: Gerenciamento de posts type-safe.
*   **Tailwind CSS**: Estilização utility-first.
*   **React**: Renderização de componentes complexos dentro do Markdown.
*   **Fontes**: Oswald (Títulos) e Inter (Leitura).
