
var React         = require('react'),
    mui           = require('material-ui'),
    MixinMui      = require('./MixinMui.react'),
    ProConActions = require('../actions/ProConActions'),
    Card          = mui.Card,
    CardText      = mui.CardText,
    RaisedButton  = mui.RaisedButton;

var RatingButtonItem = React.createClass({

    displayName: 'RatingButtonItem',

    _handleRateClick: function(proConItemId, val, e) {
        ProConActions.rate(proConItemId, val);
    },

    render: function() {
        return (
            <span>
                <RaisedButton
                    label   = {this.props.data.value.toString()}
                    onClick = {this._handleRateClick.bind(
                        this,
                        this.props.data.proConItem.id,
                        this.props.data.value
                    )}
                />
            </span>
        );
    }
});

var RatingButtons = React.createClass({

    displayName: 'RatingButtons',
    mixins:      [MixinMui],

    render: function() {
        var buttonList = [0,1,2,3,4,5,6,7,8,9,10],
            proConItem = this.props.proConItem;
        return (
            <ul id="ratingButtons">
                {buttonList.map(function(value) {
                    return (
                        <li key={"ratingBtn_"+value}>
                            <RatingButtonItem data={{value: value, proConItem: proConItem}} />
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = RatingButtons;
