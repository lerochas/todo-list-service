var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //função que retorna todas as tarefas de um dado usuário
  app.get('/api/todos/:uname', function(req, res) {
    Todos.find({ username: req.params.uname }, function(err, todos) {
      if (err) throw err;
      
      res.status(200).json({
        success: true,
        todo: todos,
      });
    });
  });

  //função que retorna uma tarefa específica por id
  app.get('/api/todo/:id', function(req, res) {
    Todos.findById({ _id: req.params.id }, function(err, todo) {
      if(err) throw err;
      
      res.status(200).json({
        success: true,
        todo: todo,
      });
    });
  });

  //função que retorna uma tarefa específica por nome
  app.get('/api/todo/name/:todo', function(req, res) {
    Todos.find({ todo: req.params.todo }, function(err, todo) {
      if (err) throw err;
      
      res.status(200).json({
        success: true,
        todo: todo,
      });
    });
  });

  //função que retorna tarefas concluídas
  app.get('/api/todo/completed/:done', function(req, res) {
    Todos.find({ isDone: req.params.done }, function(err, todo) {
      if (err) throw err;

      res.status(200).json({
        success: true,
        todo: todo,
      });
    });
  });

  //função que adiciona nova tarefa
  app.post('/api/todo', function(req, res){
    var newTodo = Todos({
      username: 'someone',
      todo: req.body.todo,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment,
    });

    newTodo.save(function(err){
      if (err) throw err;
      
      res.status(200).json({
        success: true,
        todo: newTodo,
      });
    });
  });

  //função que altera tarefa
  app.put('/api/todo/:id', function(req, res) {
    Todos.findByIdAndUpdate(req.params.id, {
      todo: req.body.todo, 
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment
    }, function(err, todo){
      if(err) throw err;

      res.status(200).json({
        success: true,
        todo: todo,
      });
    });
  })

  //função que exclui tarefa
  app.delete('/api/todo', function(req, res) {
    Todos.findByIdAndRemove(req.body.id, function(err){
      if (err) throw err;

      res.status(200).json({
        success: true,
      });
    });
  });
  
}