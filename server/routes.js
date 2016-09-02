var questionsController = require('./controllers/questionController.js');

module.exports = function (app, express){
  //setup routes

  //user sends number of questions to backend for quiz
  app.post('/api/questions', questionsController.create);

};