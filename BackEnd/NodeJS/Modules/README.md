# Modulos

## Table of Contents
**[Resumo](#installation-instructions)**<br>
**[Instruções de uso](#usage-instructions)**<br>
**[Lista](#list)**<br>

### Resumo

  > Node tem um sistema simples de carregamento de módulos, a utilização 
  > de módulos permite incluir outros arquivos JavaScript em sua aplicação,> este sistema utiliza o formáto de módulos CommonJS.

  > Módulos são cruciais para construção de aplicações em Node pois eles 
  > permitem incluir bibliotecas externas, como bibliotecas de acesso ao 
  > banco de dados, e ajudam a organizar seu código em partes separadas 
  > com responsabilidades limitadas. Você deve tentar indentificar partes > reusáveis do seu código e transformá-las em módulos separados para 
  > reduzir a quantidade de código por arquivo e para ficar mais fácil de > ler e manter seu código.

  > Todo arquivo é um modulo.
     
### Instruções de uso

#### Exportar
  > Exports = Exporta o conteudo, deixa visível.

  > ModuloA.js
```javascript
      this.ola = 'Fala Pessoal'
      exports.bemVindo = 'Bem vindo ao node!'
      module.exports.ateLogo = 'Até próximo exemplo'
```
  > ModuloB.js
  > Utilize sempre module.exports, pra esportar objeto
```javascript
      ModuloB.js
      module.exports = {
      bomDia: 'Bom dia',
        boaNoite() {
        return 'Boa noite'
        }
      }
```
#### Importar
  > Require = Importa o conteudo.
```javascript
      const moduloA = require('./moduloA')
      const moduloB = require('./moduloB')
      console.log(moduloA.ola)
      console.log(moduloA.bemVindo)
      console.log(moduloA.ateLogo)
      console.log(moduloA)

      console.log(moduloB.bomDia)
      console.log(moduloB.boaNoite())
      console.log(moduloB)      
```

### Lista

- [Axios], Promise based HTTP client for the browser and node.js.
- [Jest], Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Knex], A batteries-included, multi-dialect (MSSQL, MySQL, PostgreSQL, SQLite3, Oracle (including Oracle Wallet Authentication)) query builder for Node.js.


[Axios]: https://github.com/axios/axios
[Jest]: https://jestjs.io
[Knex]: http://knexjs.org/