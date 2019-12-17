const porta = normalizePort(process.env.PORT || '3003');
const app = require('./src/app');

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

function normalizePort(value) {
    const port = parseInt(value, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
}