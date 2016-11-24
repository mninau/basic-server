module.exports = (app) => {
  app.get('/fake', (req, res) => res.send('<h1>Hello world!</h1>'));
};