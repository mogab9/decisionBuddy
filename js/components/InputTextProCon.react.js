
var React           = require('react'),
    mui             = require('material-ui'),
    //ProConStore   = require('../stores/ProConStore'),
    //ProConActions = require('../actions/ProConActions'),
    ThemeManager    = new mui.Styles.ThemeManager(),
    TextField       = mui.TextField,
    Card            = mui.Card,
    CardText        = mui.CardText,
    FlatButton      = mui.FlatButton,
    CardActions     = mui.CardActions;

var InputTextProCon = React.createClass({

    displayName: 'InputTextProCon',

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentDidMount: function() {
        //ProConStore.addChangeListener(this._handleOnChange);
    },

    componentWillUnmount: function() {
        //ProConStore.removeChangeListener(this._handleOnChange);
    },

    getInitialState: function() {
        return {};
    },

    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    _handleOnChange: function(e) {
        // TODO
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
            <div className="textProCon">
                <Card>
                    <CardText>
                        <TextField
                          ref       = "inputProCon"
                          hintText  = "type a pro or con here"
                          fullWidth = {true}
                        />
                        <CardActions>
                            <FlatButton label="Pro"/>
                            <FlatButton label="Con"/>
                        </CardActions>
                    </CardText>
                </Card>
            </div>
        );
    },

});

module.exports = InputTextProCon;
