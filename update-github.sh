#!/bin/bash

# 🔄 RSalomao Design System - Auto Update Script

echo "🔄 Atualizando RSalomao Design System no GitHub..."

# Adicionar mudanças
git add .

# Verificar se há mudanças
if git diff --staged --quiet; then
    echo "✅ Nenhuma mudança para commit"
    exit 0
fi

# Commit com timestamp
git commit -m "📝 Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"

# Push para GitHub
git push origin main

echo "✅ Atualização concluída!"
echo "🌐 Repositório: https://github.com/rsalomaoGET/RSalomao-Design-System"
