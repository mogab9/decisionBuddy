
var React           = require('react'),
    Router          = require('react-router'),
    mui             = require('material-ui'),
    MixinMui        = require('./MixinMui.react'),
    ProConStore     = require('../stores/ProConStore'),
    ProConActions   = require('../actions/ProConActions'),
    ProConItem      = require('./ProConItem.react'),
    Link            = Router.Link,
    TextField       = mui.TextField,
    Card            = mui.Card,
    CardText        = mui.CardText,
    CardHeader      = mui.CardHeader,
    RaisedButton    = mui.RaisedButton,
    CardActions     = mui.CardActions;

var InputTextProCon = React.createClass({

    displayName: 'InputTextProCon',
    mixins:      [MixinMui],

    componentDidMount: function() {
        ProConStore.addChangeListener(this._handleOnChange);
    },

    componentWillUnmount: function() {
        ProConStore.removeChangeListener(this._handleOnChange);
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
                    <RaisedButton
                        id    = "btnFinish"
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
                            id        = "inputTextProCon"
                            className = "inputTextField"
                            ref       = "inputProCon"
                            hintText  = "House is very good located"
                            fullWidth = {true}
                        />
                        <CardActions>
                            <RaisedButton
                                id        = "btnPro"
                                ref       = "addPro"
                                label     = "Pro"
                                onClick   = {this._handleProInputClick}
                            />
                            <RaisedButton
                                id        = "btnCon"
                                ref       = "addCon"
                                label     = "Con"
                                onClick   = {this._handleConInputClick}
                            />
                            {this.getFinishButton()}
                        </CardActions>
                    </CardText>
                </Card>

                <ul>
                    {proConList.map(function(list) {
                        return list.map(function(object) {
                            return <ProConItem data={object} />;
                        });
                    })}
                </ul>
            </div>
        );
    },

});

module.exports = InputTextProCon;
