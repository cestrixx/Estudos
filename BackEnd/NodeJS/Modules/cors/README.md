# Cors

O CORS é um pacote node.js para fornecer um middleware do Connect/Express que pode ser usado para ativar o CORS com várias opções.

# Instalação

```bash
npm install cors
```

# Configuração

# Usabilidade

### Simple Usage (Enable All CORS Requests)
```js
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
# Documentação curta

