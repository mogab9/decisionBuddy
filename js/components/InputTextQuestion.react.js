
var React           = require('react'),
    mui             = require('material-ui'),
    QuestionStore   = require('../stores/QuestionStore'),
    QuestionActions = require('../actions/QuestionActions'),
    ThemeManager    = new mui.Styles.ThemeManager(),
    TextField       = mui.TextField;

var InputTextQuestion = React.createClass({

    displayName: 'InputTextQuestion',

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentDidMount: function() {
        QuestionStore.addChangeListener(this._handleOnChange);
    },

    componentWillUnmount: function() {
        QuestionStore.removeChangeListener(this._handleOnChange);
    },

    getInitialState: function() {
        return {
          questionValue: QuestionStore.get()
        };
    },

    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    _handleQuestionInputBlur: function(e) {
        QuestionActions.addQuestionMark(e.target.value);
    },

    _handleQuestionInputKeyDown: function(e) {
        e.target.blur();
    },

    _handleOnChange: function(e) {
        // save question in question store
        QuestionActions.save( this.refs.inputQuestion.getValue() );

        this.setState({
          questionValue: this.refs.inputQuestion.getValue() // QuestionStore.get()
        });
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
          <div className="textQuestion">
            <TextField
              ref            = "inputQuestion"
              hintText       = "type here a decision you want to consider ..."
              fullWidth      = {true}
              value          = {this.state.questionValue}
              onBlur         = {this._handleQuestionInputBlur}
              onEnterKeyDown = {this._handleQuestionInputKeyDown}
              onChange       = {this._handleOnChange}
            />
          </div>
        );
    },

});

module.exports = InputTextQuestion;
