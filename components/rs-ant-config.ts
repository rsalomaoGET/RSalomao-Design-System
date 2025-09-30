// 🎨 RSalomao Design System - Configuração Ant Design
// Versão: 1.0.0

import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

export const rsThemeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    // 🎨 Cores Principais
    colorPrimary: '#2dd4bf',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#3b82f6',

    // 🌙 Backgrounds
    colorBgBase: '#0b1220',
    colorBgContainer: 'rgba(255,255,255,0.02)',
    colorBgElevated: '#111a2b',
    colorBgLayout: 'transparent',
    colorBgSpotlight: 'rgba(255,255,255,0.05)',

    // 🔤 Textos
    colorText: '#e6edf6',
    colorTextSecondary: '#8391a8',
    colorTextTertiary: '#9fb0c7',
    colorTextQuaternary: '#64748b',

    // 🔲 Bordas
    colorBorder: '#1e293b',
    colorBorderSecondary: '#334155',

    // 📝 Tipografia
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 30,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 18,
    fontSizeHeading5: 16,

    // 🔄 Border Radius
    borderRadius: 10,
    borderRadiusLG: 16,
    borderRadiusSM: 6,
    borderRadiusXS: 4,

    // 📐 Espaçamentos
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,

    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,

    // ✨ Sombras
    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
    boxShadowSecondary: '0 2px 8px rgba(0,0,0,0.15)',

    // 🔄 Transições
    motionDurationFast: '0.15s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',

    // 📏 Tamanhos de Controle
    controlHeight: 36,
    controlHeightLG: 44,
    controlHeightSM: 28,
    controlHeightXS: 24,

    // 🎯 Z-Index
    zIndexBase: 0,
    zIndexPopupBase: 1000,
  },
  components: {
    // 📄 Card
    Card: {
      colorBgContainer: 'rgba(255,255,255,0.02)',
      colorBorderSecondary: '#1e293b',
      borderRadiusLG: 16,
      paddingLG: 24,
    },

    // 🔘 Button
    Button: {
      borderRadius: 10,
      fontWeight: 500,
      primaryShadow: '0 2px 8px rgba(45,212,191,0.3)',
      defaultShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },

    // 📝 Input
    Input: {
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
      colorBorder: '#1e293b',
      borderRadius: 10,
      paddingBlock: 12,
      paddingInline: 16,
    },

    // 📋 Select
    Select: {
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
      colorBgElevated: '#111a2b',
      colorBorder: '#1e293b',
      borderRadius: 10,
    },

    // 📅 DatePicker
    DatePicker: {
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
      colorBgElevated: '#111a2b',
      colorBorder: '#1e293b',
      borderRadius: 10,
    },

    // 📊 Table
    Table: {
      colorBgContainer: 'transparent',
      colorFillAlter: 'rgba(15, 23, 42, 0.6)',
      colorBorderSecondary: '#1e293b',
      borderRadiusLG: 10,
    },

    // 🏷️ Tag
    Tag: {
      colorBgContainer: 'rgba(15, 23, 42, 0.8)',
      colorBorder: '#1e293b',
      borderRadiusSM: 6,
    },

    // 📱 Modal
    Modal: {
      colorBgElevated: '#111a2b',
      colorBgMask: 'rgba(3, 10, 20, 0.7)',
      borderRadiusLG: 16,
      paddingLG: 24,
    },

    // 🔔 Notification
    Notification: {
      colorBgElevated: '#111a2b',
      colorBorder: '#1e293b',
      borderRadiusLG: 12,
    },

    // 📋 Form
    Form: {
      labelColor: '#8391a8',
      labelFontSize: 14,
      labelRequiredMarkColor: '#ef4444',
    },

    // 🎯 Tooltip
    Tooltip: {
      colorBgSpotlight: '#111a2b',
      colorTextLightSolid: '#e6edf6',
      borderRadius: 8,
    },

    // 📊 Progress
    Progress: {
      defaultColor: '#2dd4bf',
      remainingColor: 'rgba(15, 23, 42, 0.8)',
    },

    // 🔄 Spin
    Spin: {
      colorPrimary: '#2dd4bf',
    },

    // 📋 Menu
    Menu: {
      colorBgContainer: 'transparent',
      colorItemBg: 'transparent',
      colorItemBgSelected: 'linear-gradient(90deg, #3556ff, #2dd4bf)',
      colorItemBgHover: 'rgba(255,255,255,0.05)',
      colorItemText: '#8391a8',
      colorItemTextSelected: '#ffffff',
      colorItemTextHover: '#e6edf6',
      borderRadius: 8,
      itemMarginBlock: 4,
      itemMarginInline: 8,
    },

    // 📐 Layout
    Layout: {
      colorBgHeader: 'rgba(255,255,255,0.05)',
      colorBgBody: 'transparent',
      colorBgTrigger: '#1e293b',
    },

    // 📈 Statistic
    Statistic: {
      titleFontSize: 14,
      contentFontSize: 24,
      colorTextDescription: '#8391a8',
    },

    // 📋 Descriptions
    Descriptions: {
      colorTextSecondary: '#8391a8',
      colorText: '#e6edf6',
      labelBg: 'transparent',
      contentBg: 'transparent',
    },

    // ⏰ Timeline
    Timeline: {
      colorPrimary: '#2dd4bf',
      colorText: '#e6edf6',
      colorTextDescription: '#8391a8',
    },

    // 🔢 InputNumber
    InputNumber: {
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
      colorBorder: '#1e293b',
      borderRadius: 10,
      paddingBlock: 12,
      paddingInline: 16,
    },

    // 📝 TextArea
    Input: {
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
      colorBorder: '#1e293b',
      borderRadius: 10,
    },

    // 🎚️ Slider
    Slider: {
      colorPrimary: '#2dd4bf',
      colorPrimaryBorder: '#2dd4bf',
      colorPrimaryBorderHover: '#45e5d3',
    },

    // 🔘 Radio
    Radio: {
      colorPrimary: '#2dd4bf',
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
    },

    // ☑️ Checkbox
    Checkbox: {
      colorPrimary: '#2dd4bf',
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
    },

    // 🔄 Switch
    Switch: {
      colorPrimary: '#2dd4bf',
      colorTextQuaternary: '#64748b',
    },

    // 📊 Rate
    Rate: {
      colorFillContent: '#2dd4bf',
    },

    // 📋 Transfer
    Transfer: {
      colorBgContainer: 'rgba(255,255,255,0.02)',
      colorBorder: '#1e293b',
    },

    // 🌳 Tree
    Tree: {
      colorBgContainer: 'transparent',
      colorBgTextHover: 'rgba(255,255,255,0.05)',
    },

    // 📅 Calendar
    Calendar: {
      colorBgContainer: 'rgba(255,255,255,0.02)',
      colorBorder: '#1e293b',
    },

    // 🎨 ColorPicker
    ColorPicker: {
      colorBgElevated: '#111a2b',
    },

    // 📋 Cascader
    Cascader: {
      colorBgContainer: 'rgba(11, 20, 38, 0.8)',
      colorBgElevated: '#111a2b',
      colorBorder: '#1e293b',
    },
  },
};

// 🎨 Configuração para português brasileiro
export const rsLocaleConfig = {
  locale: 'pt-BR',
  // Adicione outras configurações de localização conforme necessário
};

// 🚀 Configuração completa para uso
export const rsAntDesignConfig = {
  theme: rsThemeConfig,
  locale: rsLocaleConfig,
};

export default rsThemeConfig;
