
var AppDispatcher= require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    AppConstants = require('../constants/AppConstants'),
    assign       = require('object-assign'),
    CHANGE_EVENT = 'change',
    _data        = {
      question : ''
    };

/**
 * Update a QuestionStore data.
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(updates) {
    _data = assign({}, _data, updates);
}

var QuestionStore = assign({}, EventEmitter.prototype, {

    /**
    * Get the question
    * @return {string} the question
    */
    get: function() {
        return _data.question;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
    * Add a question mark if question's last character is not a question mark
    * @param {string} question
    */
    addQuestionMark: function(question) {
        if (question.length > 0) {
            if (question[question.length-1] != "?") {
                update({question: question + "?"});
            }
        }
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case AppConstants.QUESTION_SAVE:
            update({question: action.question});
            QuestionStore.emitChange();
            break;

        case AppConstants.QUESTION_ADD_QUESTIONMARK:
            QuestionStore.addQuestionMark(action.question);
            QuestionStore.emitChange();
            break;

        default:
          // no op
  }
});

module.exports = QuestionStore;
