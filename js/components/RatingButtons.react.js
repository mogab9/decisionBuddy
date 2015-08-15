
var React        = require('react'),
    mui          = require('material-ui'),
    MixinMui     = require('./MixinMui.react'),
    Card         = mui.Card,
    CardText     = mui.CardText;

var RatingButtonItem = React.createClass({

    displayName: 'RatingButtonItem',

    render: function() {
        return (
            <span>{this.props.data.value}</span>
        );
    }
});

var RatingButtons = React.createClass({

    displayName: 'RatingButtons',
    mixins:      [MixinMui],

    render: function() {
        var buttonList = [0,1,2,3,4,5,6,7,8,9,10];
        return (
            <ul className="RatingButtons">
                {buttonList.map(function(value) {
                    return (
                        <li key={"ratingBtn_"+value}>
                            <RatingButtonItem data={{value: value}} />
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = RatingButtons;
