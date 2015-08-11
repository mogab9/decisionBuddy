
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

var ListProConItemWrapper = React.createClass({
    render: function() {
        return <li>{this.props.data.text.text}</li>;
    }
});

var InputTextProCon = React.createClass({

    displayName: 'InputTextProCon',

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentDidMount: function() {
        ProConStore.addChangeListener(this._handleOnChange);
    },

    componentWillUnmount: function() {
        ProConStore.removeChangeListener(this._handleOnChange);
    },

    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState: function() {
        return {
            proConList: ProConStore.getAll()
        };
    },

    _handleProInputClick: function(e) {
        var input = this.refs.inputProCon.getValue();
        if (input.length > 0)
            ProConActions.addPro( this.refs.inputProCon.getValue() );
        this.refs.inputProCon.setValue('');
    },

    _handleConInputClick: function(e) {
        var input = this.refs.inputProCon.getValue();
        if (input.length > 0)
            ProConActions.addCon( this.refs.inputProCon.getValue() );
        this.refs.inputProCon.setValue('');
    },

    _handleOnChange: function(e) {
        this.setState({
            proConList: ProConStore.getAll()
        });
    },

    /**
    * @return {object}
    */
    render: function() {
        var proConList = [this.state.proConList.pros, this.state.proConList.cons];
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
                            <FlatButton
                                ref     = "addPro"
                                label   = "Pro"
                                onClick = {this._handleProInputClick}
                            />
                            <FlatButton
                                ref     = "addCon"
                                label   = "Con"
                                onClick = {this._handleConInputClick}
                            />
                        </CardActions>
                    </CardText>
                </Card>
                <ul>
                    {proConList.map(function(list) {
                        return list.map(function(object) {
                            var className = (object.type == 'pro')
                                ? 'proconcard procard'
                                : 'proconcard concard';
                            return (
                                <Card className={className} key={object.id}>
                                    <CardText>
                                        <ListProConItemWrapper data={object} />
                                    </CardText>
                                </Card>
                            );
                        });
                    })}
                </ul>
            </div>
        );
    },

});

module.exports = InputTextProCon;
