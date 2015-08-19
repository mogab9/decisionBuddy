
var React             = require('react'),
    mui               = require('material-ui'),
    Card              = mui.Card,
    CardText          = mui.CardText,
    CardTitle         = mui.CardTitle,
    MixinMui          = require('./MixinMui.react'),
    InputTextQuestion = require('./InputTextQuestion.react');
    Result            = require('./Result.react');


var ViewResult = React.createClass({

    displayName: 'ViewResult',
    mixins:      [MixinMui],

    /**
    * @return {object}
    */
    render: function() {
        return (
            <div className="Rate">
                <Card initiallyExpanded={true}>
                    <CardTitle title="Decision Buddy" subtitle="A simple decision helper"/>
                    <CardText>
                        <InputTextQuestion data={{disabled: true}} />
                        <Result />
                    </CardText>
                </Card>
            </div>
        );
    },

});

module.exports = ViewResult;
