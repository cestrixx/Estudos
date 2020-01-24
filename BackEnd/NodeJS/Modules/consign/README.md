# Consign

>Carregue automaticamente seus scripts(modelos, rotas, esquemas, configurações, controladores, mapas de objetos ... etc ...)

O consign é bem interessante, pois ele nos poupa muito código. Imagine que você tenha 300 módulos e você precisa utilizar todos em sua aplicação, você teria que requerer um por um, ficando mais ou menos assim:

```js
var modulo1 = require('modulo1');
var modulo2 = require('modulo2');
var modulo3 = require('modulo3');
var moduloN = require('moduloN');
..........
var modulo300 = require('modulo300');
```
Teríamos uma cadeia enorme de requires.

 # Recursos

- Carregamento automático de Scripts
- Oferece suporte a order, include e exclude
- Feito para complementar frameworks or scripts
- Facilita o trabalho dos aplicativos MVC
- Test driven
- Rápido, leve, sem dependências externas
- Altamente configurável 

# Instalação

```bash
npm install consign
```

# Usabilidade

### app.js

```js
var consign = require('consign');

consign()
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app);

// app.models.user
// app.models.company
// app.controllers.user
// app.controllers.company
// app.routes.user
// app.routes.company
```
### routes/users.js
```js
module.exports = function(app) {
    var users = app.controllers.users;

    app.post('/users', users.create);
    app.get('/users', users.readAll);
    app.route('/users/:id')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
};
```

### controllers/users.js
```js
var users = {};

users.create = function(req, res) {
    console.log("req.params", req.params);
    res.send("Entrou na api.adiciona");
};

users.readAll = function(req, res) {
    console.log("req.params", req.params);
    res.send("Entrou na api.lista");
};

users.read = function(req, res) {
    console.log("req.params", req.params);
    res.send("Entrou na api.buscaPorId");
};

users.update = function(req, res) {
    console.log("req.params", req.params.id);
    res.send("Entrou na api.atualiza");
};

users.delete = function(req, res) {
    console.log("req.params", req.params.id);
    res.send("Entrou na api.removePorId");
};

module.exports = users;
```

# Documentação curta

O objeto de opções opcionais é passado como um parâmetro para a principal função de consign 

#### Padrão
  ```js
    consign({
      cwd: process.cwd(),
      locale: 'en-us',
      logger: console,
      verbose: true,
      extensions: [ '.js', '.json', '.node' ],
      loggingType: 'info'
    })
  ```

### Logging

- `logger` - O padrão é o console, isso pode ser desativado.
- `verbose` - Ativado por padrão, defina como `false` para nenhum log.
- `loggingType` - Defina o tipo de log, o padrão é info.

### Locale

Localidade atual suportada (para saída de log):

  - en-au
  - en-nz
  - en-us
  - fr-fr
  - pl
  - zh-cn


A primeira linha indica qual será nosso diretório padrão.

```js
consign({cwd: 'app'})
```

A próxima indica que devemos incluir mais um diretório

```js
.include('api')
```

Mas este não é o único diretório, também devemos incluir outro, no nosso caso.

```js
.then('routes')
```

E por fim indica que posso receber um parâmetro nos módulos que estão dentro destes diretórios.

```js
.into(app);
```
#### Fique atento

> Os diretórios tem que estar na ordem em que serão utilizados, pois o consign os interpreta como uma fila.

Se tivéssemos outros diretórios bastaria adicionar mais

```js
.then('outro diretório')
.then('mais um')
.then('outro ainda')
```

Todos os arquivos dentro dos diretórios seriam carregados.

### Extensões de arquivo

O padrão é uma array contendo `.js` , `.json` e `.node` , novos são concatenados em vez de substituídos. 