# 🚀 Deploy para GitHub

## 📋 Pré-requisitos

- [ ] Conta no GitHub
- [ ] Git instalado localmente
- [ ] Acesso de escrita ao repositório

## 🔧 Configuração Inicial

### 1️⃣ Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome: `RSalomao-Design-System`
4. Descrição: `Design system moderno e profissional baseado no tema dark glassmorphism`
5. Marque como **Public** (ou Private se preferir)
6. **NÃO** inicialize com README (já temos um)
7. Clique em "Create repository"

### 2️⃣ Conectar Repositório Local

```bash
# No diretório RSalomao-Design-System
git remote add origin https://github.com/SEU_USUARIO/RSalomao-Design-System.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu username do GitHub**

### 3️⃣ Sincronização Automática

```bash
# Execute o script de sincronização
./sync-github.sh
```

## 🌐 Configurar GitHub Pages (Opcional)

Para hospedar a documentação:

1. Vá para **Settings** do repositório
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha **main** branch
5. Pasta: **/ (root)**
6. Clique em **Save**

Sua documentação estará disponível em:
`https://SEU_USUARIO.github.io/RSalomao-Design-System`

## 📦 Publicar como NPM Package (Opcional)

```bash
# Login no NPM
npm login

# Publicar package
npm publish --access public
```

## 🔄 Workflow de Desenvolvimento

### Fazer Mudanças
```bash
# 1. Editar arquivos
# 2. Testar mudanças
# 3. Sincronizar
./sync-github.sh
```

### Versionamento
```bash
# Versão patch (1.0.0 -> 1.0.1)
npm version patch

# Versão minor (1.0.0 -> 1.1.0)
npm version minor

# Versão major (1.0.0 -> 2.0.0)
npm version major

# Sincronizar
./sync-github.sh
```

## 🏷️ Releases

### Criar Release no GitHub

1. Vá para **Releases** no repositório
2. Clique em **Create a new release**
3. Tag: `v1.0.0`
4. Title: `🎨 RSalomao Design System v1.0.0`
5. Descrição: Copie do CHANGELOG.md
6. Clique em **Publish release**

## 👥 Colaboração

### Adicionar Colaboradores

1. **Settings** → **Manage access**
2. **Invite a collaborator**
3. Digite username ou email
4. Escolha permissões (Write/Admin)

### Branch Protection

1. **Settings** → **Branches**
2. **Add rule** para branch `main`
3. Configurações recomendadas:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Restrict pushes that create files

## 🔧 Troubleshooting

### Erro de Autenticação
```bash
# Configurar credenciais
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Usar token pessoal em vez de senha
# GitHub Settings → Developer settings → Personal access tokens
```

### Erro de Push
```bash
# Forçar push (cuidado!)
git push --force-with-lease origin main

# Ou resolver conflitos
git pull origin main
# Resolver conflitos manualmente
git push origin main
```

### Repositório já existe
```bash
# Remover remote existente
git remote remove origin

# Adicionar novo remote
git remote add origin https://github.com/SEU_USUARIO/RSalomao-Design-System.git
```

## ✅ Checklist de Deploy

- [ ] ✅ Repositório criado no GitHub
- [ ] ✅ Remote origin configurado
- [ ] ✅ Primeiro push realizado
- [ ] ✅ README.md visível no GitHub
- [ ] ✅ Documentação acessível
- [ ] ✅ License configurada
- [ ] ✅ GitHub Pages configurado (opcional)
- [ ] ✅ Colaboradores adicionados (se necessário)
- [ ] ✅ Branch protection configurado
- [ ] ✅ First release criado

## 🎉 Pronto!

Seu RSalomao Design System está agora sincronizado com o GitHub!

**Repositório:** `https://github.com/SEU_USUARIO/RSalomao-Design-System`

### Próximos Passos:
1. Compartilhe o repositório com sua equipe
2. Configure CI/CD se necessário
3. Publique no NPM para distribuição
4. Crie issues para melhorias futuras
