
var React        = require('react'),
    mui          = require('material-ui'),
    Card         = mui.Card,
    CardText     = mui.CardText,
    CardTitle    = mui.CardTitle,
    MixinMui     = require('./MixinMui.react'),
    InputRate    = require('./InputRate.react');

var ViewRate = React.createClass({

    displayName: 'ViewRate',
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
                        <InputRate />
                    </CardText>
                </Card>
            </div>
        );
    },

});

module.exports = ViewRate;
