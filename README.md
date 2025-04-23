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
- Gerenciamento completo de professores (cadastro, listagem, edição e exclusão)
- Gerenciamento completo de alunos (cadastro, listagem, edição e exclusão)
- Autenticação e autorização para professores e alunos
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
   ```

### 📖 Endpoints da API

#### Autenticação

- **POST /auth/register**: Registra um novo professor ou aluno no sistema (requer campo `userType` com valor "teacher" ou "student")
- **POST /auth/login**: Autentica um professor ou aluno (requer campo `userType` para identificar o tipo de usuário)
- **GET /auth/profile**: Retorna os dados do usuário autenticado (requer token JWT)

#### Postagens

- **GET /posts**: Lista todas as postagens
- **GET /posts/:id**: Retorna os detalhes de uma postagem específica
- **POST /posts**: Cria uma nova postagem
- **PUT /posts/:id**: Atualiza uma postagem existente
- **DELETE /posts/:id**: Exclui uma postagem
- **GET /posts/search?q=term**: Busca postagens por palavra-chave

#### Professores

- **GET /teachers**: Lista paginada de professores
- **GET /teachers/:id**: Retorna os detalhes de um professor específico
- **POST /teachers**: Cria um novo registro de professor
- **PUT /teachers/:id**: Atualiza os dados de um professor existente
- **DELETE /teachers/:id**: Remove um professor do sistema
- **GET /teachers/search/query?q=term**: Busca professores por nome, email ou especialidade

#### Alunos

- **GET /students**: Lista paginada de alunos
- **GET /students/:id**: Retorna os detalhes de um aluno específico
- **POST /students**: Cria um novo registro de aluno
- **PUT /students/:id**: Atualiza os dados de um aluno existente
- **DELETE /students/:id**: Remove um aluno do sistema
- **GET /students/search/query?q=term**: Busca alunos por nome, email ou matrícula

### 🔐 Autenticação e Autorização

A plataforma utiliza autenticação baseada em JWT (JSON Web Tokens) para proteger rotas e identificar usuários.

#### Cadastro de usuários

Para registrar um novo usuário é necessário enviar os seguintes dados:

**Para professores:**

```json
{
  "name": "Nome do Professor",
  "email": "professor@email.com",
  "password": "senha123",
  "userType": "teacher",
  "specialty": "Matemática",
  "phone": "11999998888"
}
```

**Para alunos:**

```json
{
  "name": "Nome do Aluno",
  "email": "aluno@email.com",
  "password": "senha123",
  "userType": "student",
  "registration": "12345",
  "birthDate": "2000-01-01",
  "phone": "11999997777"
}
```

#### Login

Para fazer login, envie:

```json
{
  "email": "usuario@email.com",
  "password": "senha123",
  "userType": "teacher" // ou "student"
}
```

Ao fazer login, o sistema retornará um token JWT que deve ser incluído no cabeçalho Authorization de todas as requisições que exigem autenticação:

```
Authorization: Bearer [token]
```

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
2. Rode o contêiner:
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
