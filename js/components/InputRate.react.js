
var React           = require('react'),
    Router          = require('react-router'),
    mui             = require('material-ui'),
    ProConStore     = require('../stores/ProConStore'),
    ProConActions   = require('../actions/ProConActions'),
    ProConItem      = require('./ProConItem.react'),
    ThemeManager    = new mui.Styles.ThemeManager(),
    TextField       = mui.TextField,
    Card            = mui.Card,
    CardHeader      = mui.CardHeader,
    CardText        = mui.CardText,
    FlatButton      = mui.FlatButton,
    CardActions     = mui.CardActions;

var InputRate = React.createClass({

    displayName: 'InputRate',
    mixins     : [Router.Navigation],

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
        var proConToRate = ProConStore.getNextUnmarkedProCon();
        // no pro in list and no con in list, redirect to home page
        if (proConToRate == false)
            this.transitionTo('/');
        // no more pro/con to rate, redirect to result page
        if (proConToRate == true)
            this.transitionTo('result');
        var className = (proConToRate.type == 'pro')
            ? 'proconcard procard'
            : 'proconcard concard';
        return (
            <ul className="proConRate">
                <li>
                    <Card className={className}>
                        <CardText key={proConToRate.id}>
                            <ProConItem data={proConToRate} />
                        </CardText>
                    </Card>
                </li>
            </ul>
        );
    },

});

module.exports = InputRate;
