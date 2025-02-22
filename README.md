# Plataforma Educacional - FIAP Tech Challenge

Este repositório contém o backend da **Plataforma Educacional**, desenvolvido
como parte da avaliação do programa de pós-graduação Tech da FIAP. A aplicação
permite que professores publiquem aulas e compartilhem conhecimento de forma
prática, centralizada e tecnológica.

---

## 🎯 Funcionalidades

- Listagem de postagens
- Criação, leitura, edição e exclusão de postagens
- Busca de postagens por palavras-chave
- Documentação da API com Swagger
- Testes unitários e de integração
- Containerização com Docker
- Pipeline de CI/CD com GitHub Actions

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js com Express
- **Banco de Dados:** PostgreSQL (produção) e SQLite (testes)
- **ORM:** Sequelize
- **Documentação:** Swagger
- **Testes:** Jest e Supertest
- **Containerização:** Docker
- **CI/CD:** GitHub Actions

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose**
- **Git**

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/fiap-techchallenge/techChallenge2.git
   cd techChallenge2
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure e inicie o ambiente com Docker:
   ```bash
   docker-compose up --build
   ```
4. Abra o terminal e no caminho salvo para "techChallenge2" execute as migrações do banco de dados:
   ```bash
   docker-compose exec app npx sequelize-cli db:migrate
   ```

   ```
   O servidor estará disponível em `http://localhost:3001`.

### 📖 Endpoints da API

- **GET /posts**: Lista todas as postagens
- **GET /posts/:id**: Retorna os detalhes de uma postagem específica
- **POST /posts**: Cria uma nova postagem
- **PUT /posts/:id**: Atualiza uma postagem existente
- **DELETE /posts/:id**: Exclui uma postagem
- **GET /posts/search?q=term**: Busca postagens por palavra-chave

### 📄 Documentação da API

Acesse a documentação completa em: `http://localhost:3001/api-docs`. A
documentação foi gerada com Swagger.

### ✅ Testes

Para executar os testes unitários e de integração, utilize o comando:

```bash
docker compose run app npm run test
```

### 🐳 Docker

Construção e execução com Docker Compose

1. Construa e inicie os serviços:
   ```bash
   docker-compose up --build
   ```
2. Execute as migrações do banco de dados:
   ```bash
   docker-compose exec app npx sequelize-cli db:migrate
   ```
3. O servidor estará disponível em `http://localhost:3001`.

Construção e execução manual

1. Construa a imagem do Docker:
   ```bash
   docker build -t plataforma-educacional .
   ```
2. Rode o contêiner::
   ```bash
   docker run -p 3001:3001 plataforma-educacional
   ```

### 🚀 CI/CD

Este projeto utiliza GitHub Actions para automação de testes e deploy. O
workflow está configurado no arquivo node.js.yml.

### 📂 Estrutura do Projeto

```
.
├── config/               # Configurações (ex.: conexão com o banco)
├── migrations/           # Scripts de migração do banco de dados
├── models/               # Modelos do Sequelize
├── routes/               # Definições de rotas da API
├── Swagger/              # Configurações do Swagger
├── test/                 # Testes unitários e de integração
├── index.js              # Arquivo principal do servidor
├── package.json          # Dependências e scripts do projeto
└── docker-compose.yml    # Configuração dos serviços Docker
```
