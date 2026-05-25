# 🚀 ELISA OS - Modular Operating System Interface

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Enabled-brightgreen)](https://rockaquino33-code.github.io/elisa-os)
[![Modular Architecture](https://img.shields.io/badge/Architecture-Modular-blue)]()

**ELISA OS** é um sistema operacional web com arquitetura modular, responsiva e futurista. Desenvolvido para ser escalável e compatível com múltiplas variações (Gamer, Business, Studio, Medical).

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Recursos Principais](#recursos-principais)
- [Instalação e Setup](#instalação-e-setup)

## 🎯 Visão Geral

ELISA OS é uma interface de sistema operacional web-based que simula um SO desktop com funcionalidades modernas:

- ✨ **Design Glassmorphism**: Interface com efeito vidro fosco futurista
- 📱 **Responsivo**: Adaptado para desktop, tablet e mobile (iOS/Android)
- 🧩 **Modular**: Arquitetura baseada em componentes reutilizáveis
- ⚡ **Performance**: Otimizado para GitHub Pages e ambientes estáticos
- 🎨 **Temas**: Sistema de temas preparado para múltiplas variações
- 🔌 **API-Ready**: Estrutura preparada para integração com APIs futuras

## 🏗️ Arquitetura

```
ELISA OS
├── Core System (kernel, ui, themes)
├── Desktop Manager
├── Window Manager
├── Dock & Taskbar
├── App Modules (Browser, Assistant, Explorer, Xbox, Settings)
└── Widget System
```

## 📁 Estrutura do Projeto

```
elisa-os/
├── index.html
├── styles/
│   ├── main.css
│   ├── desktop.css
│   ├── windows.css
│   ├── dock.css
│   └── widgets.css
├── scripts/
│   ├── system.js
│   ├── desktop.js
│   ├── windows.js
│   ├── dock.js
│   └── apps.js
├── assets/
├── apps/
├── system/
└── docs/
```

## ✨ Recursos Principais

### 1. Desktop Modular
- Gerenciamento dinâmico de ícones
- Sistema de eventos
- Wallpaper adaptável

### 2. Sistema de Janelas
- Janelas flutuantes
- Minimizar, maximizar, fechar
- Redimensionamento

### 3. Dock Funcional
- Apps fixas e dinâmicas
- Efeito hover com zoom
- Indicador de janelas abertas

### 4. Aplicações Integradas
- Browser
- Assistant
- Explorer
- Xbox
- Settings

## 🚀 Instalação e Setup

```bash
git clone https://github.com/rockaquino33-code/elisa-os.git
cd elisa-os
git checkout modular-architecture
python -m http.server 8000
```

Acesse: http://localhost:8000

## 📄 Licença

MIT License
