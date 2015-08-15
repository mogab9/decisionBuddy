
var React           = require('react'),
    Router          = require('react-router'),
    mui             = require('material-ui'),
    ProConStore     = require('../stores/ProConStore'),
    ProConActions   = require('../actions/ProConActions'),
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
        console.log(proConToRate);
        // no pro in list and no con in list, redirect to home page
        if (proConToRate == false)
            this.transitionTo('/');
        // no more pro/con to rate, redirect to result page
        if (proConToRate == true)
            this.transitionTo('result');
        return (
            <div className="proConRate">
                <Card>
                    <CardText>
                        // TODO: Create a proConItem item an use it everywhere to be DRY
                    </CardText>
                </Card>
            </div>
        );
    },

});

module.exports = InputRate;
