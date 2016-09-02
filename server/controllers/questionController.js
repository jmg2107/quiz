var Question = require('../models/questionModel');
var Usage = require('./usageController');

exports.create = function(req, res, next){
  console.log('num questions sent from frontend', req.body.num);
  var num = req.body.num;

  //array that contains the question id's to be sent back for the quiz
  var packet = [];

  var strands = [];
  var standards = [];

  //extract all the strand id's in questionModel
  Question.find({strand_id})
  .exec(function(err, id){
    if(err){
      console.log("error retrieving strand_id's")
    }
    strands = id;
  });

  //extract all the standards id's in questionModel
  Question.find({standard_id})
  .exec(function(err, id){
    if(err){
      console.log("error retrieving strand_id's")
    }
    standards = id;
  });

  //generate the quiz
  for(var i=0; i<num; i++){

    //cycle through the id's and grab corresponding question
    standard = standards[i%standards.length];
    strand = strands[i%strands.length];

    Question.findOne({standard_id: standard, strand_id: strand})
      .exec(function(err, question){
        if(err){
          console.log("error retrieving ")
        }

        //push question_id onto packet
        packet.push(question.question_id);

        //call Usage.logQuestion to add question to the usage table
        Usage.logQuestion(question.question_id);
      });
  }

  res.status(201).send(packet);
};