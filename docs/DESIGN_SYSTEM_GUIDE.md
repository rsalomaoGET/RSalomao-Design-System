# 🎨 **RSalomao Design System**

## 📋 **Visão Geral**

Design system moderno e profissional baseado no tema dark glassmorphism, otimizado para aplicações enterprise e dashboards administrativos.

**Características:**
- ✨ **Glassmorphism** com efeitos de vidro
- 🌙 **Dark theme** profissional
- 🎨 **Gradientes** teal + azul
- 💼 **Enterprise-ready** para sistemas corporativos
- 🔧 **Ant Design** como base

---

## 🎨 **Paleta de Cores**

### **🌙 Backgrounds**
```css
--rs-bg-primary: #0b1220      /* Background principal */
--rs-bg-secondary: #111a2b    /* Sidebars, headers */
--rs-bg-card: rgba(255,255,255,0.02)  /* Cards transparentes */
--rs-bg-glass: rgba(255,255,255,0.05) /* Efeito vidro */
--rs-bg-overlay: rgba(3,10,20,0.7)    /* Modals, overlays */
```

### **🔤 Textos**
```css
--rs-text-primary: #e6edf6    /* Texto principal */
--rs-text-secondary: #8391a8  /* Texto secundário */
--rs-text-muted: #9fb0c7      /* Texto desabilitado */
--rs-text-inverse: #0a0f1c    /* Texto em backgrounds claros */
```

### **🎯 Cores de Destaque**
```css
--rs-primary: #2dd4bf         /* Cor primária (teal) */
--rs-secondary: #3556ff       /* Cor secundária (azul) */
--rs-success: #10b981         /* Verde sucesso */
--rs-warning: #f59e0b         /* Amarelo aviso */
--rs-error: #ef4444           /* Vermelho erro */
--rs-info: #3b82f6            /* Azul informação */
```

### **🔲 Bordas e Elementos**
```css
--rs-border: #1e293b          /* Bordas padrão */
--rs-border-focus: #3556ff    /* Bordas em foco */
--rs-border-hover: #2563eb    /* Bordas hover */
```

---

## 📝 **Tipografia**

### **🔤 Famílias de Fonte**
```css
--rs-font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--rs-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
```

### **📏 Tamanhos**
```css
--rs-text-xs: 0.75rem;    /* 12px */
--rs-text-sm: 0.875rem;   /* 14px */
--rs-text-base: 1rem;     /* 16px */
--rs-text-lg: 1.125rem;   /* 18px */
--rs-text-xl: 1.25rem;    /* 20px */
--rs-text-2xl: 1.5rem;    /* 24px */
--rs-text-3xl: 1.875rem;  /* 30px */
```

### **⚖️ Pesos**
```css
--rs-font-light: 300;
--rs-font-normal: 400;
--rs-font-medium: 500;
--rs-font-semibold: 600;
--rs-font-bold: 700;
```

---

## 🔲 **Espaçamentos**

### **📐 Sistema de Grid**
```css
--rs-space-1: 0.25rem;   /* 4px */
--rs-space-2: 0.5rem;    /* 8px */
--rs-space-3: 0.75rem;   /* 12px */
--rs-space-4: 1rem;      /* 16px */
--rs-space-5: 1.25rem;   /* 20px */
--rs-space-6: 1.5rem;    /* 24px */
--rs-space-8: 2rem;      /* 32px */
--rs-space-10: 2.5rem;   /* 40px */
--rs-space-12: 3rem;     /* 48px */
```

### **🔄 Border Radius**
```css
--rs-radius-sm: 6px;     /* Pequeno */
--rs-radius-md: 10px;    /* Médio */
--rs-radius-lg: 16px;    /* Grande */
--rs-radius-xl: 24px;    /* Extra grande */
--rs-radius-full: 9999px; /* Circular */
```

---

## 🌟 **Efeitos Visuais**

### **✨ Sombras**
```css
--rs-shadow-sm: 0 2px 8px rgba(0,0,0,0.15);
--rs-shadow-md: 0 10px 30px rgba(0,0,0,0.35);
--rs-shadow-lg: 0 20px 40px rgba(0,0,0,0.5);
--rs-shadow-glow: 0 0 0 3px rgba(53,86,255,0.15);
```

### **🌊 Glassmorphism**
```css
--rs-glass-light: rgba(255,255,255,0.02);
--rs-glass-medium: rgba(255,255,255,0.05);
--rs-glass-strong: rgba(255,255,255,0.08);
--rs-blur: blur(10px);
--rs-blur-strong: blur(20px);
```

### **🌈 Gradientes**
```css
--rs-gradient-primary: linear-gradient(90deg, #3556ff, #2dd4bf);
--rs-gradient-secondary: linear-gradient(135deg, #667eea, #764ba2);
--rs-gradient-success: linear-gradient(90deg, #10b981, #059669);
--rs-gradient-warning: linear-gradient(90deg, #f59e0b, #d97706);
--rs-gradient-bg: linear-gradient(180deg, #0a0f1c 0%, #0e1627 40%, #0a0f1c 100%);
```

---

## 🧩 **Componentes Base**

### **📄 Cards**
```css
.rs-card {
  background: var(--rs-bg-glass);
  backdrop-filter: var(--rs-blur);
  border: 1px solid var(--rs-border);
  border-radius: var(--rs-radius-lg);
  box-shadow: var(--rs-shadow-md);
  padding: var(--rs-space-6);
}

.rs-card-header {
  border-bottom: 1px solid var(--rs-border);
  padding-bottom: var(--rs-space-4);
  margin-bottom: var(--rs-space-6);
}
```

### **🔘 Botões**
```css
.rs-btn {
  border-radius: var(--rs-radius-md);
  font-weight: var(--rs-font-medium);
  padding: var(--rs-space-3) var(--rs-space-6);
  transition: all 0.2s ease;
}

.rs-btn-primary {
  background: var(--rs-gradient-primary);
  border: none;
  color: white;
}

.rs-btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--rs-shadow-md);
}
```

### **📝 Inputs**
```css
.rs-input {
  background: rgba(11, 20, 38, 0.8);
  border: 1px solid var(--rs-border);
  border-radius: var(--rs-radius-md);
  color: var(--rs-text-primary);
  padding: var(--rs-space-3) var(--rs-space-4);
}

.rs-input:focus {
  border-color: var(--rs-border-focus);
  box-shadow: var(--rs-shadow-glow);
}
```

---

## 🏷️ **Classes Utilitárias**

### **🎨 Cores de Texto**
```css
.rs-text-primary { color: var(--rs-text-primary); }
.rs-text-secondary { color: var(--rs-text-secondary); }
.rs-text-muted { color: var(--rs-text-muted); }
.rs-text-success { color: var(--rs-success); }
.rs-text-warning { color: var(--rs-warning); }
.rs-text-error { color: var(--rs-error); }
```

### **🌈 Gradientes de Texto**
```css
.rs-gradient-text {
  background: var(--rs-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### **💻 Códigos**
```css
.rs-code {
  font-family: var(--rs-font-mono);
  background: rgba(12, 20, 38, 0.8);
  border: 1px solid var(--rs-border);
  border-radius: var(--rs-radius-sm);
  padding: 2px 6px;
  color: #7aa2ff;
  font-size: var(--rs-text-xs);
}
```

---

## 📱 **Responsividade**

### **📐 Breakpoints**
```css
--rs-screen-sm: 640px;   /* Mobile */
--rs-screen-md: 768px;   /* Tablet */
--rs-screen-lg: 1024px;  /* Desktop */
--rs-screen-xl: 1280px;  /* Large Desktop */
--rs-screen-2xl: 1536px; /* Extra Large */
```

### **📱 Media Queries**
```css
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 🎯 **Status e Estados**

### **🚦 Cores de Status**
```css
.rs-status-draft { color: var(--rs-warning); }
.rs-status-pending { color: var(--rs-info); }
.rs-status-approved { color: var(--rs-success); }
.rs-status-rejected { color: var(--rs-error); }
.rs-status-active { color: var(--rs-success); }
.rs-status-inactive { color: var(--rs-text-muted); }
```

### **🔄 Estados Interativos**
```css
.rs-hover:hover {
  background: var(--rs-bg-glass);
  transform: translateY(-1px);
}

.rs-focus:focus {
  outline: none;
  border-color: var(--rs-border-focus);
  box-shadow: var(--rs-shadow-glow);
}

.rs-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 🚀 **Como Usar**

### **1️⃣ Instalação**
```bash
# Copie os arquivos CSS para seu projeto
cp RSalomao-Design-System/css/* seu-projeto/src/styles/

# Importe no seu App.tsx/jsx
import './styles/rs-design-system.css';
```

### **2️⃣ Configuração Ant Design**
```tsx
import { ConfigProvider, theme } from 'antd';
import { rsThemeConfig } from './styles/rs-ant-config';

<ConfigProvider theme={rsThemeConfig}>
  <App />
</ConfigProvider>
```

### **3️⃣ Uso de Classes**
```tsx
// Card com glassmorphism
<div className="rs-card">
  <h2 className="rs-gradient-text">Título</h2>
  <p className="rs-text-secondary">Descrição</p>
</div>

// Botão primário
<button className="rs-btn rs-btn-primary">
  Ação Principal
</button>

// Código destacado
<span className="rs-code">API_KEY</span>
```

---

## 📚 **Exemplos de Uso**

### **🏠 Dashboard Card**
```tsx
<div className="rs-card">
  <div className="rs-card-header">
    <h3 className="rs-gradient-text">Estatísticas</h3>
  </div>
  <div className="rs-text-primary">
    <span className="rs-text-2xl rs-font-bold">1,234</span>
    <span className="rs-text-secondary rs-text-sm">usuários ativos</span>
  </div>
</div>
```

### **📝 Formulário**
```tsx
<form className="rs-card">
  <input 
    className="rs-input" 
    placeholder="Digite seu email"
  />
  <button className="rs-btn rs-btn-primary">
    Enviar
  </button>
</form>
```

### **📊 Tabela**
```tsx
<div className="rs-card">
  <table className="rs-table">
    <thead>
      <tr>
        <th className="rs-text-secondary">Nome</th>
        <th className="rs-text-secondary">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="rs-text-primary">João</td>
        <td className="rs-status-active">Ativo</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 🎨 **Customização**

### **🔧 Variáveis CSS**
Para customizar, altere as variáveis CSS no arquivo `rs-tokens.css`:

```css
:root {
  /* Altere a cor primária */
  --rs-primary: #your-color;
  
  /* Altere o background */
  --rs-bg-primary: #your-bg;
  
  /* Altere a fonte */
  --rs-font-sans: 'Your Font', sans-serif;
}
```

### **🎯 Temas Alternativos**
Crie variações do tema criando novos arquivos:
- `rs-theme-light.css` - Versão clara
- `rs-theme-corporate.css` - Versão corporativa
- `rs-theme-colorful.css` - Versão colorida

---

## 📋 **Checklist de Implementação**

### **✅ Setup Inicial**
- [ ] Copiar arquivos CSS
- [ ] Configurar Ant Design
- [ ] Importar tokens
- [ ] Testar componentes base

### **✅ Componentes**
- [ ] Cards funcionando
- [ ] Botões estilizados
- [ ] Inputs com foco
- [ ] Tabelas responsivas
- [ ] Modais com glassmorphism

### **✅ Responsividade**
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

### **✅ Acessibilidade**
- [ ] Contraste adequado
- [ ] Focus visível
- [ ] Navegação por teclado
- [ ] Screen readers

---

## 🔄 **Versionamento**

**Versão Atual:** 1.0.0

### **📝 Changelog**
- **v1.0.0** - Design system inicial baseado no P2R POC
- Glassmorphism dark theme
- Componentes Ant Design customizados
- Tokens de design completos

---

## 🤝 **Contribuição**

Para evoluir o design system:

1. **Documente** novas necessidades
2. **Teste** em diferentes projetos
3. **Padronize** novos componentes
4. **Versione** as mudanças

---

## 📞 **Suporte**

Para dúvidas ou melhorias:
- Documente casos de uso
- Crie exemplos práticos
- Mantenha consistência
- Pense em reutilização

**Status:** ✅ **Design System Pronto para Uso**
