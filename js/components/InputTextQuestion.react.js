
var React           = require('react'),
    mui             = require('material-ui'),
    MixinMui        = require('./MixinMui.react'),
    QuestionStore   = require('../stores/QuestionStore'),
    QuestionActions = require('../actions/QuestionActions'),
    TextField       = mui.TextField;

var InputTextQuestion = React.createClass({

    displayName: 'InputTextQuestion',
    mixins:      [MixinMui],

    componentDidMount: function() {
        QuestionStore.addChangeListener(this._handleOnChange);
        // give focus to question input
        document.getElementById('inputTextQuestion').focus();
    },

    componentWillUnmount: function() {
        QuestionStore.removeChangeListener(this._handleOnChange);
    },

    getInitialState: function() {
        return {
            questionValue: QuestionStore.get()
        };
    },

    focus: function() {
        document.getElementById('inputTextProCon').focus();
    },

    _handleQuestionInputBlur: function(e) {
        QuestionActions.addQuestionMark( this.refs.inputQuestion.getValue() );
        this.focus();
    },

    _handleQuestionInputKeyDown: function(e) {
        this.focus();
    },

    _handleOnChange: function(e) {
        // save question in question store
        if (e != undefined)
            QuestionActions.save( this.refs.inputQuestion.getValue() )

        this.setState({
          questionValue: QuestionStore.get()
        });
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
          <div className="textQuestion">
            <TextField
                id             = "inputTextQuestion"
                className      = "inputTextField"
                ref            = "inputQuestion"
                hintText       = "Should I buy this new house?"
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
