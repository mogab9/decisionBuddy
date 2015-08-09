
var React             = require('react'),
    mui               = require('material-ui'),
    Card              = mui.Card,
    CardText          = mui.CardText,
    CardTitle         = mui.CardTitle,
    ThemeManager      = new mui.Styles.ThemeManager(),
    InputTextQuestion = require('./InputTextQuestion.react'),
    InputTextProCon   = require('./InputTextProCon.react');

var ViewHome = React.createClass({

    displayName: 'ViewHome',

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
            <div className="Home">
                <Card initiallyExpanded={true}>
                    <CardTitle title="Decision Buddy" subtitle="A simple decision helper"/>
                    <CardText>
                        <InputTextQuestion />
                        <br />
                        <InputTextProCon />
                    </CardText>
                </Card>
            </div>
        );
    },

});

module.exports = ViewHome;
