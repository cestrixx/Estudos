const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())
require('./src/routes/products')(app)

// app.get('/', (req, res, next) => {
//     res.send("<h1>Bem Vindo</h1>");
// })

// app.get('/produtos', (req, res, next) => {
//     res.send(database.getProdutos())
// })

// app.get('/produtos/:id', (req, res, next) => {
//     res.send(database.getProduto(req.params.id))
// })

// app.post('/produtos', (req, res, next) => {
//     const produto = database.salvarProduto({
//         nome: req.body.nome,
//         preco: req.body.preco
//     })
//     res.send(produto) // JSON
// })

// app.put('/produtos/:id', (req, res, next) => {
//     const produto = database.salvarProduto({
//         id: req.params.id,
//         nome: req.body.nome,
//         preco: req.body.preco
//     })
//     res.send(produto) // JSON
// })

// app.delete('/produtos/:id', (req, res, next) => {
//     const produto = database.excluirProduto(req.params.id)
//     res.send(produto) // JSON
// })

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})