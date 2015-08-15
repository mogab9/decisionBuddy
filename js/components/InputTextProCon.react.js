
var React           = require('react'),
    Router          = require('react-router'),
    mui             = require('material-ui'),
    ProConStore     = require('../stores/ProConStore'),
    ProConActions   = require('../actions/ProConActions'),
    ProConItem      = require('./ProConItem.react'),
    ThemeManager    = new mui.Styles.ThemeManager(),
    Link            = Router.Link,
    TextField       = mui.TextField,
    Card            = mui.Card,
    CardHeader      = mui.CardHeader,
    CardText        = mui.CardText,
    FlatButton      = mui.FlatButton,
    CardActions     = mui.CardActions;

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

    /**
    * @return whether the finish button can be displayed or not
    */
    getCanBeFinished: function() {
        return (this.state.proConList.cons.length > 0
            &&  this.state.proConList.pros.length > 0);
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

    getFinishButton: function()
    {
        if (this.getCanBeFinished()) {
            return (
                <Link to="rate">
                    <FlatButton
                        ref   = "finish"
                        label = "finish"
                    />
                </Link>
            );
        }
        // simili-undefined because CardActions can't handle an undefined view
        return (<span/>);
    },

    /**
    * @return {object}
    */
    render: function() {
        var proConList   = [this.state.proConList.pros, this.state.proConList.cons];

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
                            {this.getFinishButton()}
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
                                <li>
                                    <Card className={className}>
                                        <CardText key={object.id}>
                                            <ProConItem data={object} />
                                        </CardText>
                                    </Card>
                                </li>
                            );
                        });
                    })}
                </ul>
            </div>
        );
    },

});

module.exports = InputTextProCon;
