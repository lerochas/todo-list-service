const Todos = require('../models/todoModel');

module.exports = function (app) {
  app.get('/api/setupTodos', function(req, res){
    //seed database
    const starterTodos = [
      {
        username: 'someone',
        todo: 'Comprar pão',
        isDone: true,
        hasAttachment: false
      },
      {
        username: 'someone',
        todo: 'Colocar ração para o cachorro',
        isDone: true,
        hasAttachment: false
      },
      {
        username: 'someone',
        todo: 'Lavar o carro',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'someone',
        todo: 'Abastecer o carro',
        isDone: false,
        hasAttachment: false
      },
    ];
    Todos.create(starterTodos, function(err, results){
      if (err) throw err;
      
      res.send(results);
    });
  })
}