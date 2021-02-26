# Koob Teste

## Descrição do Projeto
Projeto realizado para fins de avaliação por parte da empresa KoobJob, onde foi desenvolvido uma mini aplicação web com o Backend estruturado com Typescript Node, o Frontend com Typescript React e o banco de dados MySQL.

O projeto foi orquestrado em Docker + Docker-compose. Olhe a guia Instalação para fazer o run do projeto.

## Tecnologias

Frontend: 
  Typescript ReactJS

Backend:
  Typescript Node

Banco de dados:
  MySQL

## Instalação

### Primeira opção de run do projeto(recomendada) :

obs: *Necessário ter docker instalado na sua máquina

- Faça o clone do projeto na sua máquina localmente
- Acesse a raiz do projeto com o terminal
- Crie um arquivo '.env' com as configurações mostradas em '.env-example'
- Digite 'sudo docker-compose up' para criação do projeto
- Digite 'sudo docker exec -it mysql bash'
- Digite 'mysql -h localhost -u root -p' e coloque a senha 'eduardo123'
- Crie um banco de dados com o comando 'CREATE DATABASE koobdb'
- Digite 'sudo docker exec -it koob_backend bash' e rode um 'npx knex migrate:latest' para poder subir as tabelas para o banco de dados
- Acesse o endereço "localhost:3002" e utilize.

### Segunda opção de run do projeto:

- Faça o clone do projeto na sua máquina localmente
- Acesse a raiz do projeto com o terminal
- Acesse a pasta frontend e rode 'npm start'
- Acesse a pasta backend e rode 'npm start'
- Rode um servidor de banco de dados MySQL localmente e faça as migrations atualizando as variáveis de ambiente do projeto
- Acesse o endereço "localhost:3002" e utilize
