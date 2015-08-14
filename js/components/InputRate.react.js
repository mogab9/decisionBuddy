
var React           = require('react'),
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
        if (proConToRate == false)
            console.log('no one pro one con case');
        if (proConToRate == true)
            console.log('no more item to rate. Switch to ViewResult!');
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
