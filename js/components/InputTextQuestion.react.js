
var React        = require('react'),
    mui          = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    TextField    = mui.TextField;

var InputTextQuestion = React.createClass({

  displayName: 'InputTextQuestion',

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  _handleQuestionInputBlur: function() {
    // add a "?" at the end of the question if there is not already one
    var question = document.getElementById("question");
    if (question.value.length > 0) {
      if (question.value[question.value.length-1] != "?") {
        question.value = question.value + "?";
      }
    }
  },

  _handleQuestionInputKeyDown: function() {
    var question = document.getElementById("question");
    question.blur();
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="textQuestion">
        <TextField
          id="question"
          hintText="type here a decision you want to consider ..."
          fullWidth="true"
          onBlur={this._handleQuestionInputBlur}
          onEnterKeyDown={this._handleQuestionInputKeyDown}
        />
      </div>
    );
  },

});

module.exports = InputTextQuestion;
