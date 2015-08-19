
var React        = require('react'),
    mui          = require('material-ui'),
    MixinMui     = require('./MixinMui.react'),
    Card         = mui.Card,
    CardText     = mui.CardText;

var ProConItem = React.createClass({

    displayName: 'ProConItem',
    mixins:      [MixinMui],

    getProConClassName: function() {
        return (this.props.data.type == 'pro')
            ? 'proconcard procard'
            : 'proconcard concard';
    },

    render: function() {
        var cssRateClass = (this.props.data.rate != undefined)
            ? ' rate_'+this.props.data.rate
            : '';
        return (
            <li className = {this.getProConClassName()+cssRateClass}>
                <Card>
                    <CardText key={this.props.data.id}>
                        <span>{this.props.data.text}</span>
                    </CardText>
                </Card>
            </li>
        );
    }
});

module.exports = ProConItem;
