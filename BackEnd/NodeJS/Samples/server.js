const porta = 3003
const app = require('./app');

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})