
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');

var QuestionActions = {

  save: function(question) {
    AppDispatcher.dispatch({
      actionType: AppConstants.QUESTION_SAVE,
      question:   question
    });
  },

  addQuestionMark: function(question) {
    AppDispatcher.dispatch({
      actionType: AppConstants.QUESTION_ADD_QUESTIONMARK,
      question:   question
    });
  }

};

module.exports = QuestionActions;
