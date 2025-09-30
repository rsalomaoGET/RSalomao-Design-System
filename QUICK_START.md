# 🚀 **RSalomao Design System - Quick Start**

## ⚡ **Instalação Rápida (5 minutos)**

### **1️⃣ Copiar Arquivos**
```bash
# Copie a pasta completa para seu projeto
cp -r RSalomao-Design-System/css seu-projeto/src/styles/rs-design-system
cp RSalomao-Design-System/components/rs-ant-config.ts seu-projeto/src/config/
```

### **2️⃣ Instalar Dependências**
```bash
npm install antd @ant-design/icons
# ou
yarn add antd @ant-design/icons
```

### **3️⃣ Configurar App Principal**
```tsx
// src/App.tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import { rsThemeConfig } from './config/rs-ant-config';
import './styles/rs-design-system/rs-design-system.css';

function App() {
  return (
    <ConfigProvider theme={rsThemeConfig}>
      <div className="rs-min-h-screen">
        {/* Seu app aqui */}
      </div>
    </ConfigProvider>
  );
}

export default App;
```

### **4️⃣ Usar Componentes**
```tsx
// Qualquer componente
import React from 'react';
import { Card, Button } from 'antd';

const MeuComponente = () => (
  <Card className="rs-glass-card">
    <h1 className="rs-gradient-text">Título</h1>
    <p className="rs-text-secondary">Descrição</p>
    <Button type="primary" className="rs-btn-primary">
      Ação
    </Button>
  </Card>
);
```

---

## 🎨 **Classes Principais**

### **📄 Cards**
```tsx
<Card className="rs-glass-card">Conteúdo</Card>
<div className="rs-card">Card customizado</div>
```

### **🔘 Botões**
```tsx
<Button className="rs-btn-primary">Primário</Button>
<Button className="rs-btn-secondary">Secundário</Button>
<Button className="rs-btn-success">Sucesso</Button>
```

### **🎨 Textos**
```tsx
<h1 className="rs-gradient-text">Título com gradiente</h1>
<p className="rs-text-primary">Texto principal</p>
<p className="rs-text-secondary">Texto secundário</p>
<span className="rs-code">CODIGO</span>
```

### **🏷️ Status**
```tsx
<Tag className="rs-tag-success">Aprovado</Tag>
<Tag className="rs-tag-warning">Pendente</Tag>
<Tag className="rs-tag-error">Rejeitado</Tag>
```

---

## 📱 **Exemplo Completo**

```tsx
import React from 'react';
import { ConfigProvider, Card, Button, Input, Table, Tag, Row, Col } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { rsThemeConfig } from './config/rs-ant-config';
import './styles/rs-design-system/rs-design-system.css';

const Dashboard = () => {
  const data = [
    { key: '1', id: 'REQ-001', title: 'Requisição', status: 'approved' }
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (text: string) => <span className="rs-code">{text}</span>
    },
    {
      title: 'Título',
      dataIndex: 'title',
      render: (text: string) => <span className="rs-text-primary">{text}</span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => (
        <Tag className={`rs-tag-${status === 'approved' ? 'success' : 'warning'}`}>
          {status === 'approved' ? 'Aprovado' : 'Pendente'}
        </Tag>
      )
    }
  ];

  return (
    <ConfigProvider theme={rsThemeConfig}>
      <div className="rs-min-h-screen rs-p-6">
        {/* Header */}
        <div className="rs-mb-8 rs-text-center">
          <h1 className="rs-text-3xl rs-font-bold rs-gradient-text">
            Meu Dashboard
          </h1>
        </div>

        {/* Stats */}
        <Row gutter={[24, 24]} className="rs-mb-8">
          <Col span={8}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-primary">1,234</div>
              <div className="rs-text-secondary">Total</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-success">856</div>
              <div className="rs-text-secondary">Aprovados</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-warning">234</div>
              <div className="rs-text-secondary">Pendentes</div>
            </Card>
          </Col>
        </Row>

        {/* Filters */}
        <Card className="rs-glass-card rs-mb-6">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Input
                placeholder="Buscar..."
                prefix={<SearchOutlined />}
                className="rs-input"
              />
            </Col>
            <Col span={12}>
              <Button type="primary" className="rs-btn-primary">
                Buscar
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Table */}
        <Card className="rs-glass-card">
          <div className="rs-flex rs-justify-between rs-mb-4">
            <h2 className="rs-text-xl rs-font-semibold rs-text-primary">
              Lista de Itens
            </h2>
            <Button type="primary" icon={<PlusOutlined />}>
              Novo Item
            </Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Dashboard;
```

---

## 🎯 **Customização Rápida**

### **🎨 Alterar Cores**
```css
/* src/styles/custom.css */
:root {
  --rs-primary: #your-color;
  --rs-secondary: #your-secondary;
}
```

### **📝 Alterar Fonte**
```css
:root {
  --rs-font-sans: 'Your Font', sans-serif;
}
```

### **🌙 Tema Claro (Opcional)**
```tsx
// Criar rs-theme-light.css
:root {
  --rs-bg-primary: #ffffff;
  --rs-text-primary: #1a1a1a;
  /* ... outras variáveis */
}
```

---

## ✅ **Checklist de Implementação**

- [ ] ✅ Arquivos CSS copiados
- [ ] ✅ Dependências instaladas
- [ ] ✅ ConfigProvider configurado
- [ ] ✅ CSS importado no App.tsx
- [ ] ✅ Primeiro componente funcionando
- [ ] ✅ Classes rs-* aplicadas
- [ ] ✅ Tema dark ativo
- [ ] ✅ Responsividade testada

---

## 🆘 **Troubleshooting**

### **❌ Estilos não aplicados**
```bash
# Verifique se importou o CSS
import './styles/rs-design-system/rs-design-system.css';
```

### **❌ Tema não funciona**
```tsx
// Verifique se envolveu com ConfigProvider
<ConfigProvider theme={rsThemeConfig}>
  <App />
</ConfigProvider>
```

### **❌ Classes rs-* não funcionam**
```css
/* Verifique se o CSS foi importado corretamente */
/* Deve aparecer no DevTools */
```

---

## 📚 **Próximos Passos**

1. **Ler documentação completa:** `docs/DESIGN_SYSTEM_GUIDE.md`
2. **Ver exemplo completo:** `templates/react-example.tsx`
3. **Customizar cores:** Editar `css/rs-tokens.css`
4. **Criar componentes:** Usar classes utilitárias
5. **Testar responsividade:** Mobile, tablet, desktop

---

## 🎉 **Pronto!**

Seu projeto agora tem o **RSalomao Design System** funcionando!

**Próximo:** Explore a documentação completa para descobrir todos os componentes e possibilidades.

**Suporte:** Consulte `docs/DESIGN_SYSTEM_GUIDE.md` para referência completa.
