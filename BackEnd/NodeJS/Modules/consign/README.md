# Consign

```
Carregue automaticamente seus scripts! o sucessor da carga expressa
```

> Usado para carregar automaticamente modelos, rotas, esquemas, configurações, controladores, mapas de objetos ... etc ...

## 1. Instalação

```
npm install consign
```

## 2. Configuração

## 3. Execução

## 4. Usabilidade

```Javascript
var consign = require('consign');

consign()
  .include('models')
  .then('controllers')
  .into(app);

// app.models.user
// app.models.company
// app.controllers.user
// app.controllers.company
```

## 5. Documentação curta