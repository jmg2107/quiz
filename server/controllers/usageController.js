var Usage = require('../models/usageModel');

//add the question id to the usage model
exports.logQuestion = function(question){
  Usage.save({question_id: question});

};