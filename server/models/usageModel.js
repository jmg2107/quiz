var mongoose = require('mongoose');


var UsageSchema = new mongoose.Schema({

  student_id: Number,
  question_id: Number,
  assigned_hours_ago: Number,
  answered_hours_ago: Number

});


module.exports = mongoose.model('Question', UsageSchema);

