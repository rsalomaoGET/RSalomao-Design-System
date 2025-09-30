#!/bin/bash

# 🚀 RSalomao Design System - GitHub Sync Script
# Este script sincroniza o sistema de design com o GitHub

echo "🎨 RSalomao Design System - GitHub Sync"
echo "======================================"

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script no diretório do RSalomao-Design-System"
    exit 1
fi

# Verificar se Git está inicializado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
fi

# Adicionar arquivos
echo "📁 Adicionando arquivos..."
git add .

# Verificar se há mudanças
if git diff --staged --quiet; then
    echo "✅ Nenhuma mudança para commit"
else
    # Fazer commit
    echo "💾 Fazendo commit das mudanças..."
    git commit -m "📝 Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Verificar se o remote origin existe
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "🔗 Configurando repositório GitHub..."
    echo "Por favor, execute os seguintes comandos:"
    echo ""
    echo "1. Crie um repositório no GitHub chamado 'RSalomao-Design-System'"
    echo "2. Execute:"
    echo "   git remote add origin https://github.com/SEU_USUARIO/RSalomao-Design-System.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "Substitua 'SEU_USUARIO' pelo seu username do GitHub"
    echo ""
    echo "Depois execute novamente: ./sync-github.sh"
    exit 0
fi

# Push para GitHub
echo "🚀 Sincronizando com GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Sincronização concluída com sucesso!"
    echo "🌐 Repositório: $(git remote get-url origin)"
    echo ""
    echo "📚 Próximos passos:"
    echo "- Acesse o repositório no GitHub"
    echo "- Configure GitHub Pages (se desejar)"
    echo "- Adicione colaboradores"
    echo "- Configure branch protection rules"
else
    echo ""
    echo "❌ Erro na sincronização"
    echo "Verifique suas credenciais do GitHub"
fi
