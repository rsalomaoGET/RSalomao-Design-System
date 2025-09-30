# 🎨 **RSalomao Design System**

> Design system moderno e profissional baseado no tema dark glassmorphism, otimizado para aplicações enterprise.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-18+-green)
![Ant Design](https://img.shields.io/badge/antd-5.0+-orange)
![TypeScript](https://img.shields.io/badge/typescript-ready-blue)

---

## ✨ **Características**

- 🌙 **Dark Theme Profissional** - Tema escuro otimizado para uso prolongado
- ✨ **Glassmorphism Effects** - Efeitos de vidro modernos e elegantes  
- 🎨 **Gradientes Personalizados** - Paleta teal + azul única
- 💼 **Enterprise Ready** - Pronto para sistemas corporativos
- 🔧 **Ant Design Base** - Construído sobre o Ant Design
- 📱 **Totalmente Responsivo** - Mobile-first design
- 🚀 **TypeScript Support** - Tipagem completa
- 🎯 **SAP Compliant** - Códigos e padrões SAP integrados

---

## 🚀 **Quick Start**

### **⚡ Instalação (5 minutos)**

```bash
# 1. Copiar arquivos
cp -r RSalomao-Design-System/css seu-projeto/src/styles/
cp RSalomao-Design-System/components/rs-ant-config.ts seu-projeto/src/

# 2. Instalar dependências
npm install antd @ant-design/icons

# 3. Importar no App.tsx
import { ConfigProvider } from 'antd';
import { rsThemeConfig } from './rs-ant-config';
import './styles/css/rs-design-system.css';
```

### **🎨 Uso Básico**

```tsx
<ConfigProvider theme={rsThemeConfig}>
  <Card className="rs-glass-card">
    <h1 className="rs-gradient-text">Título</h1>
    <p className="rs-text-secondary">Descrição</p>
    <Button type="primary">Ação</Button>
  </Card>
</ConfigProvider>
```

**📖 [Guia Completo de Instalação](QUICK_START.md)**

---

## 🎨 **Paleta de Cores**

### **🌙 Backgrounds**
```css
--rs-bg-primary: #0b1220      /* Background principal */
--rs-bg-secondary: #111a2b    /* Sidebars, headers */
--rs-bg-glass: rgba(255,255,255,0.05)  /* Efeito vidro */
```

### **🎯 Cores de Destaque**
```css
--rs-primary: #2dd4bf         /* Teal primário */
--rs-secondary: #3556ff       /* Azul secundário */
--rs-success: #10b981         /* Verde sucesso */
--rs-warning: #f59e0b         /* Amarelo aviso */
--rs-error: #ef4444           /* Vermelho erro */
```

### **🔤 Textos**
```css
--rs-text-primary: #e6edf6    /* Texto principal */
--rs-text-secondary: #8391a8  /* Texto secundário */
--rs-text-muted: #9fb0c7      /* Texto desabilitado */
```

---

## 🧩 **Componentes Principais**

### **📄 Cards com Glassmorphism**
```tsx
<Card className="rs-glass-card">
  <div className="rs-card-header">
    <h3 className="rs-gradient-text">Título</h3>
  </div>
  Conteúdo do card
</Card>
```

### **🔘 Botões Estilizados**
```tsx
<Button className="rs-btn-primary">Primário</Button>
<Button className="rs-btn-secondary">Secundário</Button>
<Button className="rs-btn-success">Sucesso</Button>
```

### **📝 Inputs com Foco**
```tsx
<Input 
  className="rs-input" 
  placeholder="Digite aqui..."
/>
```

### **🏷️ Tags de Status**
```tsx
<Tag className="rs-tag-success">Aprovado</Tag>
<Tag className="rs-tag-warning">Pendente</Tag>
<Tag className="rs-tag-error">Rejeitado</Tag>
```

### **💻 Códigos Destacados**
```tsx
<span className="rs-code">API_KEY</span>
<span className="rs-sap-code">MATNR</span>
```

---

## 📱 **Responsividade**

### **📐 Breakpoints**
```css
--rs-screen-sm: 640px    /* Mobile */
--rs-screen-md: 768px    /* Tablet */
--rs-screen-lg: 1024px   /* Desktop */
--rs-screen-xl: 1280px   /* Large Desktop */
```

### **🔧 Classes Responsivas**
```tsx
<div className="rs-block rs-md:flex rs-lg:grid">
  Responsivo por breakpoint
</div>
```

---

## 🛠️ **Classes Utilitárias**

### **🎨 Cores de Texto**
```css
.rs-text-primary     /* Texto principal */
.rs-text-secondary   /* Texto secundário */
.rs-text-success     /* Verde */
.rs-text-warning     /* Amarelo */
.rs-text-error       /* Vermelho */
.rs-gradient-text    /* Gradiente teal→azul */
```

### **📐 Espaçamentos**
```css
.rs-p-4    /* Padding 16px */
.rs-m-6    /* Margin 24px */
.rs-gap-3  /* Gap 12px */
.rs-space-y-4  /* Espaço vertical */
```

### **🔄 Layout**
```css
.rs-flex           /* Display flex */
.rs-items-center   /* Align items center */
.rs-justify-between /* Justify space-between */
.rs-grid           /* Display grid */
```

### **✨ Efeitos**
```css
.rs-shadow-md      /* Sombra média */
.rs-rounded-lg     /* Border radius grande */
.rs-transition     /* Transição suave */
.rs-hover          /* Efeito hover */
```

---

## 📊 **Exemplos de Uso**

### **🏠 Dashboard Card**
```tsx
<Card className="rs-glass-card rs-text-center">
  <div className="rs-text-2xl rs-font-bold rs-text-primary rs-mb-2">
    1,234
  </div>
  <div className="rs-text-secondary rs-text-sm">
    Total de Usuários
  </div>
</Card>
```

### **📋 Formulário**
```tsx
<Card className="rs-glass-card">
  <h2 className="rs-text-xl rs-font-semibold rs-gradient-text rs-mb-6">
    Novo Cadastro
  </h2>
  
  <div className="rs-space-y-4">
    <div>
      <label className="rs-label">Nome</label>
      <Input className="rs-input" placeholder="Digite o nome" />
    </div>
    
    <div>
      <label className="rs-label">Email</label>
      <Input className="rs-input" placeholder="Digite o email" />
    </div>
    
    <div className="rs-flex rs-gap-3 rs-mt-6">
      <Button type="primary" className="rs-btn-primary">
        Salvar
      </Button>
      <Button className="rs-btn-secondary">
        Cancelar
      </Button>
    </div>
  </div>
</Card>
```

### **📊 Tabela com Status**
```tsx
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (text) => <span className="rs-code">{text}</span>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => (
      <Tag className={`rs-tag-${status}`}>
        {status === 'active' ? 'Ativo' : 'Inativo'}
      </Tag>
    )
  }
];

<Table 
  columns={columns} 
  dataSource={data}
  className="rs-table"
/>
```

---

## 🎯 **Customização**

### **🎨 Alterar Cores Principais**
```css
/* Criar arquivo custom.css */
:root {
  --rs-primary: #your-primary-color;
  --rs-secondary: #your-secondary-color;
  --rs-gradient-primary: linear-gradient(90deg, #color1, #color2);
}
```

### **📝 Alterar Tipografia**
```css
:root {
  --rs-font-sans: 'Your Font Family', sans-serif;
  --rs-font-mono: 'Your Mono Font', monospace;
}
```

### **🌙 Criar Tema Claro**
```css
/* rs-theme-light.css */
:root {
  --rs-bg-primary: #ffffff;
  --rs-bg-secondary: #f8fafc;
  --rs-text-primary: #1e293b;
  --rs-text-secondary: #64748b;
  /* ... outras variáveis */
}
```

---

## 📁 **Estrutura do Projeto**

```
RSalomao-Design-System/
├── 📁 css/
│   ├── rs-tokens.css          # Variáveis CSS
│   ├── rs-components.css      # Componentes base
│   ├── rs-utilities.css       # Classes utilitárias
│   └── rs-design-system.css   # Arquivo principal
├── 📁 components/
│   └── rs-ant-config.ts       # Configuração Ant Design
├── 📁 templates/
│   └── react-example.tsx      # Exemplo completo
├── 📁 docs/
│   └── DESIGN_SYSTEM_GUIDE.md # Documentação completa
├── README.md                  # Este arquivo
└── QUICK_START.md            # Guia de instalação
```

---

## 🔧 **Compatibilidade**

### **✅ Suportado**
- React 18+
- Ant Design 5.0+
- TypeScript 4.5+
- Next.js 13+
- Vite 4+
- Create React App

### **📱 Browsers**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📚 **Documentação**

- **📖 [Guia Completo](docs/DESIGN_SYSTEM_GUIDE.md)** - Documentação detalhada
- **🚀 [Quick Start](QUICK_START.md)** - Instalação rápida
- **🎨 [Exemplo Completo](templates/react-example.tsx)** - Template funcional

---

## 🎯 **Casos de Uso**

### **💼 Ideal Para:**
- Dashboards administrativos
- Sistemas enterprise
- Portais corporativos
- Aplicações SAP
- Painéis de controle
- Sistemas de gestão

### **🎨 Características Visuais:**
- Interface profissional
- Tema dark moderno
- Efeitos glassmorphism
- Gradientes elegantes
- Tipografia legível
- Componentes consistentes

---

## 🔄 **Versionamento**

### **📝 Changelog**
- **v1.0.0** (Atual)
  - Design system inicial
  - Tema dark glassmorphism
  - Componentes Ant Design customizados
  - Classes utilitárias completas
  - Documentação completa
  - Exemplo funcional

### **🚀 Roadmap**
- **v1.1.0** - Tema claro opcional
- **v1.2.0** - Mais componentes customizados
- **v1.3.0** - Animações avançadas
- **v2.0.0** - Suporte a múltiplos temas

---

## 🤝 **Contribuição**

### **📋 Como Contribuir**
1. Use o design system em seus projetos
2. Documente necessidades específicas
3. Sugira melhorias e novos componentes
4. Mantenha consistência visual
5. Teste em diferentes dispositivos

### **🎯 Diretrizes**
- Mantenha a identidade visual
- Priorize acessibilidade
- Documente mudanças
- Teste responsividade
- Considere performance

---

## 📞 **Suporte**

### **🆘 Problemas Comuns**
- **Estilos não aplicados:** Verifique importação do CSS
- **Tema não funciona:** Confirme ConfigProvider
- **Classes não funcionam:** Verifique ordem de importação

### **📖 Recursos**
- Documentação completa em `docs/`
- Exemplo funcional em `templates/`
- Guia de instalação em `QUICK_START.md`

---

## 📄 **Licença**

Este design system é baseado no projeto P2R POC e está disponível para uso em projetos RSalomao.

---

## 🎉 **Começar Agora**

```bash
# Clone ou copie os arquivos
cp -r RSalomao-Design-System/ seu-projeto/

# Siga o Quick Start
cat QUICK_START.md

# Em 5 minutos você terá um design profissional!
```

**🚀 [Começar com Quick Start](QUICK_START.md)**

---

**Criado com ❤️ para aplicações enterprise modernas**
