# NodeJS

## Table of Contents
**[Instrucoes de Instalacao](#installation-instructions)**<br>
**[Instrucoes de Uso](#usage-instructions)**<br>
**[Tools](#tools)**<br>
**[Frameworks](#frameworks)**<br>
**[Libraries](#libraries)**<br>


### Instrucoes de Instalacao
  - [Via Package Manager](https://nodejs.org/en/download/package-manager/)
  - [Download](https://nodejs.org/en/download/)


### Instrucoes de Uso
  - [Documento](https://nodejs.org/en/docs/)

  Arquivo **Package.json**
  > O package.json é um elemento-chave em muitas aplicações do ecossistema Node.js.
  > O package.json é uma espécie de manifesto do seu projeto. Ele pode fazer várias coisas, completamente não relacionadas. Ele é um repositório central de configurações de ferramentas, por exemplo. Ele também é onde npm armazena os nomes e versões dos pacotes instalados.
```
  npm init
  npm init -y
```
  > Define um wizard de configuracao

  Arquivo **.gitignore**
  > Utilize para iginorar arquivos ou modulos que voce nao quer enviar para o git (node_modules).
  > Coleções de modelos do arquivo .gitignore. [Link](https://github.com/github/gitignore)


### Tools

  **Gerenciador de pacotes**
  > Essa utilidade auxilia na instalação e desinstalação de pacotes, gerenciamento da versões e gerenciamento de dependências necessárias para executar um projeto.
  - [NPM](https://www.npmjs.com)
  - [YARN](https://yarnpkg.com/lang/en/)

  **ESLint**
  > Find and fix problems in your JavaScript code. **(Extension: Visual Code)**
  > Mantém o código uniforme.
  [Link](https://eslint.org)

  **Nodemon**
  > Esse módulo é um utilitário que irá monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário.
  - [Link1](https://nodemon.io)
  - [Link2](https://medium.com/front-end-weekly/configuring-nodemon-on-a-node-js-server-da9eed2eeb5)

  **Roda como servidor**
  - [Runkit](https://runkit.com/home)


### Frameworks

  **Build Web APIs**
  - [Express](https://expressjs.com)
  - [Restify](http://restify.com)
  - [Fastfy](https://www.fastify.io)
  - [Sails](https://sailsjs.com/)

### Libraries

  **Axios**
  > Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor.
  - [Link1](https://github.com/axios/axios)
  - [Link2](http://codeheaven.io/how-to-use-axios-as-your-http-client-pt)

  **Teste**
  > Criar uma pasta teste e padronizar a criação das sub-pastas e dos arquivos do mesmo modo da padronização do projeto
  - [Mocha](https://mochajs.org) **(Extension: Visual Code)**
  - [Jest](https://jestjs.io)

  **Express-Validator**
  - [Express-Validator](https://express-validator.github.io/docs/)
