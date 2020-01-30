module.exports = app => {
  app.get('/', function (req, res) {
    res.send('Seja bem vindo!');
  });
};