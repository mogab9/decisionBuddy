
var React         = require('react'),
    Router        = require('react-router'),
    mui           = require('material-ui'),
    MixinMui      = require('./MixinMui.react'),
    ProConActions = require('../actions/ProConActions');

var InputRateStars = React.createClass({

    displayName: 'InputRateStars',
    mixins:      [MixinMui],

    componentDidMount: function() {
        this._addRatingListener();
    },

    _addRatingListener: function() {
        var self = this;

        // listeners on li (stars)
        var starList = document.getElementsByClassName('user-rating')[0]
                               .getElementsByTagName('li');
        for (var i = 0; i < starList.length; i++) {
            starList[i].addEventListener('click', function(e) {
                // Call action to save this new rate
                var rateVal = e.currentTarget.getAttribute('data-rating');
                ProConActions.rate(self.props.proConItem.id, rateVal);
            }, false);
        }
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
            <div className="rateStars">
                <div className="rating">
                    <ul className="user-rating">
                        <li data-rating="5"><i className="fa fa-star"></i></li>
                        <li data-rating="4"><i className="fa fa-star"></i></li>
                        <li data-rating="3"><i className="fa fa-star"></i></li>
                        <li data-rating="2"><i className="fa fa-star"></i></li>
                        <li data-rating="1"><i className="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
        );
    },

});

module.exports = InputRateStars;
