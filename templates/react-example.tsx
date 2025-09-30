// 🎨 RSalomao Design System - Exemplo React
// Como usar o design system em seus projetos

import React from 'react';
import { ConfigProvider, Card, Button, Input, Table, Tag, Space, Row, Col } from 'antd';
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { rsThemeConfig } from '../components/rs-ant-config';

// 📋 Importar CSS do design system
import '../css/rs-design-system.css';

// 🎯 Dados de exemplo
const mockData = [
  {
    key: '1',
    id: 'REQ-001',
    title: 'Requisição de Material',
    status: 'approved',
    value: 1250.00,
    date: '2024-01-15'
  },
  {
    key: '2',
    id: 'REQ-002',
    title: 'Compra de Equipamentos',
    status: 'pending',
    value: 3500.00,
    date: '2024-01-16'
  },
  {
    key: '3',
    id: 'REQ-003',
    title: 'Serviços de Manutenção',
    status: 'draft',
    value: 850.00,
    date: '2024-01-17'
  }
];

// 📊 Colunas da tabela
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text: string) => <span className="rs-code">{text}</span>
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => <span className="rs-text-primary">{text}</span>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const statusMap = {
        approved: { color: 'success', text: 'Aprovada' },
        pending: { color: 'info', text: 'Pendente' },
        draft: { color: 'warning', text: 'Rascunho' }
      };
      const config = statusMap[status as keyof typeof statusMap];
      return (
        <Tag className={`rs-tag-${config.color}`}>
          {config.text}
        </Tag>
      );
    }
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    render: (value: number) => (
      <span className="rs-text-primary rs-font-medium">
        R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
    )
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (date: string) => <span className="rs-text-secondary">{date}</span>
  },
  {
    title: 'Ações',
    key: 'actions',
    render: () => (
      <Space>
        <Button 
          type="primary" 
          size="small" 
          icon={<EditOutlined />}
          className="rs-btn-sm"
        >
          Editar
        </Button>
        <Button 
          danger 
          size="small" 
          icon={<DeleteOutlined />}
          className="rs-btn-sm"
        >
          Excluir
        </Button>
      </Space>
    )
  }
];

// 🎨 Componente principal
const RSDesignSystemExample: React.FC = () => {
  return (
    <ConfigProvider theme={rsThemeConfig}>
      <div className="rs-min-h-screen rs-p-6">
        {/* 🏠 Header */}
        <div className="rs-mb-8 rs-text-center">
          <h1 className="rs-text-3xl rs-font-bold rs-gradient-text rs-mb-2">
            RSalomao Design System
          </h1>
          <p className="rs-text-secondary rs-text-lg">
            Exemplo de uso do design system em aplicação React
          </p>
        </div>

        {/* 📊 Cards de Estatísticas */}
        <Row gutter={[24, 24]} className="rs-mb-8">
          <Col xs={24} sm={12} lg={6}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-primary rs-mb-1">
                1,234
              </div>
              <div className="rs-text-secondary rs-text-sm">
                Total de Requisições
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-success rs-mb-1">
                856
              </div>
              <div className="rs-text-secondary rs-text-sm">
                Aprovadas
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-warning rs-mb-1">
                234
              </div>
              <div className="rs-text-secondary rs-text-sm">
                Pendentes
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="rs-glass-card rs-text-center">
              <div className="rs-text-2xl rs-font-bold rs-text-info rs-mb-1">
                144
              </div>
              <div className="rs-text-secondary rs-text-sm">
                Rascunhos
              </div>
            </Card>
          </Col>
        </Row>

        {/* 📋 Formulário de Busca */}
        <Card className="rs-glass-card rs-mb-6">
          <div className="rs-flex rs-items-center rs-justify-between rs-mb-4">
            <h2 className="rs-text-xl rs-font-semibold rs-text-primary rs-m-0">
              Filtros de Busca
            </h2>
          </div>
          
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <label className="rs-label">Buscar por ID ou Título</label>
              <Input
                placeholder="Digite para buscar..."
                prefix={<SearchOutlined className="rs-text-muted" />}
                className="rs-input"
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <label className="rs-label">Status</label>
              <Input placeholder="Todos os status" className="rs-input" />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <label className="rs-label">Período</label>
              <Input placeholder="Selecione o período" className="rs-input" />
            </Col>
          </Row>

          <div className="rs-flex rs-gap-3 rs-mt-6">
            <Button type="primary" icon={<SearchOutlined />} className="rs-btn-primary">
              Buscar
            </Button>
            <Button className="rs-btn-secondary">
              Limpar Filtros
            </Button>
          </div>
        </Card>

        {/* 📊 Tabela Principal */}
        <Card className="rs-glass-card">
          <div className="rs-flex rs-items-center rs-justify-between rs-mb-6">
            <h2 className="rs-text-xl rs-font-semibold rs-text-primary rs-m-0">
              Lista de Requisições
            </h2>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              className="rs-btn-primary"
            >
              Nova Requisição
            </Button>
          </div>

          <Table
            columns={columns}
            dataSource={mockData}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => 
                `${range[0]}-${range[1]} de ${total} itens`
            }}
            className="rs-table"
          />
        </Card>

        {/* 🎨 Showcase de Componentes */}
        <Card className="rs-glass-card rs-mt-8">
          <h2 className="rs-text-xl rs-font-semibold rs-text-primary rs-mb-6">
            Showcase de Componentes
          </h2>

          <Row gutter={[24, 24]}>
            {/* 🔘 Botões */}
            <Col xs={24} lg={12}>
              <h3 className="rs-text-lg rs-font-medium rs-text-secondary rs-mb-4">
                Botões
              </h3>
              <Space wrap>
                <Button type="primary" className="rs-btn-primary">
                  Primário
                </Button>
                <Button className="rs-btn-secondary">
                  Secundário
                </Button>
                <Button className="rs-btn rs-btn-success">
                  Sucesso
                </Button>
                <Button className="rs-btn rs-btn-warning">
                  Aviso
                </Button>
                <Button className="rs-btn rs-btn-error">
                  Erro
                </Button>
              </Space>
            </Col>

            {/* 🏷️ Tags */}
            <Col xs={24} lg={12}>
              <h3 className="rs-text-lg rs-font-medium rs-text-secondary rs-mb-4">
                Tags de Status
              </h3>
              <Space wrap>
                <Tag className="rs-tag-success">Aprovado</Tag>
                <Tag className="rs-tag-warning">Pendente</Tag>
                <Tag className="rs-tag-error">Rejeitado</Tag>
                <Tag className="rs-tag-info">Informação</Tag>
                <span className="rs-code">COD-123</span>
              </Space>
            </Col>

            {/* 🎨 Textos */}
            <Col xs={24} lg={12}>
              <h3 className="rs-text-lg rs-font-medium rs-text-secondary rs-mb-4">
                Tipografia
              </h3>
              <div className="rs-space-y-2">
                <div className="rs-text-primary rs-text-lg rs-font-semibold">
                  Texto Primário Grande
                </div>
                <div className="rs-text-secondary rs-text-base">
                  Texto Secundário Normal
                </div>
                <div className="rs-text-muted rs-text-sm">
                  Texto Desabilitado Pequeno
                </div>
                <div className="rs-gradient-text rs-text-xl rs-font-bold">
                  Texto com Gradiente
                </div>
              </div>
            </Col>

            {/* 🔔 Alertas */}
            <Col xs={24} lg={12}>
              <h3 className="rs-text-lg rs-font-medium rs-text-secondary rs-mb-4">
                Alertas
              </h3>
              <div className="rs-space-y-3">
                <div className="rs-alert rs-alert-success">
                  ✅ Operação realizada com sucesso!
                </div>
                <div className="rs-alert rs-alert-warning">
                  ⚠️ Atenção: Verifique os dados informados.
                </div>
                <div className="rs-alert rs-alert-error">
                  ❌ Erro: Não foi possível processar a solicitação.
                </div>
              </div>
            </Col>
          </Row>
        </Card>

        {/* 📋 Footer */}
        <div className="rs-text-center rs-mt-12 rs-py-8 rs-border-t">
          <p className="rs-text-secondary rs-text-sm">
            RSalomao Design System v1.0.0 - 
            <span className="rs-text-primary"> Criado para aplicações enterprise</span>
          </p>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default RSDesignSystemExample;
