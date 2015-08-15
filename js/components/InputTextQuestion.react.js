
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
    },

    componentWillUnmount: function() {
        QuestionStore.removeChangeListener(this._handleOnChange);
    },

    getInitialState: function() {
        return {
          questionValue: QuestionStore.get()
        };
    },

    _handleQuestionInputBlur: function(e) {
        QuestionActions.addQuestionMark( this.refs.inputQuestion.getValue() );
    },

    _handleQuestionInputKeyDown: function(e) {
        e.target.blur();
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
