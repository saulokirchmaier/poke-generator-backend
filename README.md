# Gerador de Pokemons - Backend

## Teste monocard

### Saulo Kirchmaier Teixeira

Aplicação backend realizado como um teste para a empresa [Monocard](https://monocard.com.br/).

### Teste

#### Proposta

- Criar um mini aplicatico web que gera um pokemon da geração 1 aleatório e permite nomeá-lo.

#### Frontend

- Tela para gerar o pokemon
- Tela com a lista de pokemons gerados

#### Backend

- API:
  1. Criar pokemons
  2. Listar pokemons criados

#### Banco de Dados

- Pokemons criados com:
  1. id
  2. nome
  3. pokemonId
  4. timestamo


### Desenvolvido backend

Para o backend foi desenvolvido um API utilizando o [Nest](https://nestjs.com/), framework baseado em [Node](https://nodejs.org/en/), e o banco de dados [Mongo](https://www.mongodb.com/).

Nesta API encontramos as seguintes rotas:

  1. POST - criação de pokemons, recebe um body com `pokemonId, nome e url(de uma imagem do pokemon)`
  2. GET - busca por todos os pokemons adicionados no banco
  3. GET - /id - busca por pokemon específico, recebe o parametro com o id do pokemon no banco
  4. PATCH - /id - atualiza o nome de um pokemon específico, recebe o parametro com o id do pokemon no banco
  5. DELETE - /id - deleta um pokemon específico, recebe o parametro com o id do pokemon no banco

### Instalação

#### Dependências

Para um funcionamento correto da apliação é necessário que o computador tenha um banco de dados do [Mongo](https://www.mongodb.com/) rodando.

- Sugestão, utilize um container [Docker](https://www.docker.com/) para gerar uma imagem do Mongo em sua máquina
  - Para instalar o Docker siga as instruções [aqui](https://docs.docker.com/desktop/linux/install/)
  - Para criar uma imagem do Mongo siga as intruções [aqui](https://hub.docker.com/_/mongo) ou [aqui](https://balta.io/blog/mongodb-docker), normalmente a porta utilizada para a instalação do Mongo é `27017`, utilize ela ou anote a porta utilizada.

Verifique que você possui o node instalado em sua máquina com o comendo no terminal

  ```
  node --version
  ```

a versão utilizada para esta aplicação foi a `16.13.1`, assim certifique que tenha instalado essa versão ou superior, para intalar o Node clique [aqui](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Clonando o repositório

- Caso tenha uma chave SSH cadastrada faça um clone deste repositório com o comando no terminal:

  ```
  git clone git@github.com:saulokirchmaier/poke-generator-backend.git
  ```

- Caso não possua uma chave SSH utilize o comando a baixo no terminal:

  ```
  git clone https://github.com/saulokirchmaier/poke-generator-backend.git
  ```

#### Iniciando a API

- Crie um arquivo `.env` na raiz do projeto com:

  ```
  HTTP_PORT=9000
  HTTP_HOST=localhost
  DATA_BASE=pokemon
  MONGODB_URL=mongodb://localhost:27017
  MONGODB_DATABASE=pokemon
  ```

- Pelo terminal, acessse a pasta e instale as dependências de desenvolvimento:

  ```
  npm install
  ```

- Com as dependências instaladas inicie a aplicação 

  ```
  npm run start
  ```
  
  - Caso tudo ocorra bem, devera ser logado:

  ```
  Application is running on: http://[::1]:9000
  ```

    - a aplicação também pode ser acessada por `http://localhost:9000`

- Com o backend em funcionamento siga abra o aplicativo frontend, para isso siga as instruções [aqui](https://github.com/saulokirchmaier/poke-generator-frontend)


#### Agradecimentos

Obrigado por ter testado está aplicação

Um grande abraço.

Saulo Kirchmaier Teixeira.