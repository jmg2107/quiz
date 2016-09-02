var mongoose = require('mongoose');


var QuestionSchema = new mongoose.Schema({

  strand_id: Number,
  strand_name: String,
  standard_id: Number,
  standard_name: String,
  question_id: Number,
  difficulty: Number

});


module.exports = mongoose.model('Question', QuestionSchema);
