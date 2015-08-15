
var React        = require('react'),
    mui          = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    Card         = mui.Card;
    CardText     = mui.CardText;

var ProConItem = React.createClass({

    displayName: 'ProConItem',

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

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
