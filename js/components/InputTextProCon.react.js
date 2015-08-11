
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
        return (
            <li>
                {this.props.data.text.text}
            </li>
        );
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
        var proConList = this.state.proConList;
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
                                label   = "Pro"
                                onClick = {this._handleProInputClick}
                            />
                            <FlatButton
                                label   = "Con"
                                onClick = {this._handleConInputClick}
                            />
                        </CardActions>
                    </CardText>
                </Card>
                <ul>
                    {proConList.pros.map(function(object) {
                        return <ListProConItemWrapper key={object.id} data={object}/>
                    })}
                    {proConList.cons.map(function(object) {
                        return <ListProConItemWrapper key={object.id} data={object}/>
                    })}
                </ul>
            </div>
        );
    },

});

module.exports = InputTextProCon;
