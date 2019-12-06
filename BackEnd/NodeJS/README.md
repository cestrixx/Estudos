# NodeJS

## Table of Contents
**[Instruções de instalação](#installation-instructions)**<br>
**[Instruções de uso](#usage-instructions)**<br>
**[Módulos](#modules)**<br>
**[NPM](#npm)**<br>
**[GitIgnore](#gitignore)**<br>
**[Nodemon](#nodemon)**<br>
**[Package.json](#package-json)**<br>
**[Axios](#axios)**<br>

### Instruções de instalação
sdf

### Instruções de uso
a

### Módulos
  > Node tem um sistema simples de carregamento de módulos, a utilização 
  > de módulos permite incluir outros arquivos JavaScript em sua aplicação,> este sistema utiliza o formáto de módulos CommonJS.

  > Módulos são cruciais para construção de aplicações em Node pois eles 
  > permitem incluir bibliotecas externas, como bibliotecas de acesso ao 
  > banco de dados, e ajudam a organizar seu código em partes separadas 
  > com responsabilidades limitadas. Você deve tentar indentificar partes > reusáveis do seu código e transformá-las em módulos separados para 
  > reduzir a quantidade de código por arquivo e para ficar mais fácil de > ler e manter seu código.

  > Todo arquivo é um modulo.
     
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

### NPM
  > Gerenciador de pacotes
 - [NPM](https://github.com/cestrixx/Estudos/tree/master/Tools/NPM)

### GitIgnore
  > Arquivo .gitignore
  > Utilize para iginorar arquivos ou modulos que voce nao quer enviar para o git (node_modules).

### Nodemon
  > Esse módulo é um utilitário que irá monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário.

### Package.json
  > O package.json é um elemento-chave em muitas aplicações do ecossistema Node.js.
  > O package.json é uma espécie de manifesto do seu projeto. Ele pode fazer várias coisas, completamente não relacionadas. Ele é um repositório central de configurações de ferramentas, por exemplo. Ele também é onde npm armazena os nomes e versões dos pacotes instalados.
```
  npm init
  npm init -y
```
  > Define um wizard de configuracao

### Axios
