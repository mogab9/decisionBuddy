
var React        = require('react'),
    mui          = require('material-ui'),
    MixinMui     = require('./MixinMui.react'),
    Card         = mui.Card,
    CardText     = mui.CardText;

var ProConItem = React.createClass({

    displayName: 'ProConItem',
    mixins:      [MixinMui],

    getCardClassName: function() {
        return (this.props.data.type == 'pro')
            ? 'proconcard procard'
            : 'proconcard concard';
    },

    render: function() {
        return (
            <Card className={this.getCardClassName()}>
                <CardText key={this.props.data.id}>
                    <span>{this.props.data.text}</span>
                </CardText>
            </Card>
        );
    }
});

module.exports = ProConItem;
