
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
        var self   = this,
            rating = document.getElementsByClassName('rating')[0];

            rating.addEventListener('click', function(e) {
                var ul           = document.createElement('ul');
                    ul.className = 'user-rating animate';

                // Create stars if not already on page
                if (rating.getElementsByClassName('user-rating').length == 0) {
                    for (var i = 5; i > 0; i--) {
                        var li   = document.createElement('li'),
                        star     = document.createElement('i');

                        li.setAttribute('data-rating', i);
                        star.className = 'fa fa-star';
                        li.appendChild(star);
                        ul.appendChild(li);
                    };

                    // Add stars to page
                    rating.appendChild(ul);
                    setTimeout(function() {
                        ul.className = 'user-rating';
                    }, 50);

                    // listeners on li (stars)
                    var starList = ul.getElementsByTagName('li');
                    for (var i = 0; i < starList.length; i++) {
                        starList[i].addEventListener('click', function(e) {
                            rateVal = e.currentTarget.getAttribute('data-rating');

                            setTimeout(function() {
                                self._removeRating(rateVal, self.props.proConItem);
                            }, 300);
                        }, false);
                    }
                };

                e.preventDefault();
                e.stopPropagation();
            }, false);

        document.addEventListener('click', function(e) {
            var rating = document.getElementsByClassName('rating');
            if (rating.length > 0) {
                var userRating = rating[0].getElementsByClassName('user-rating');
                if (userRating.length > 0) {
                    self._removeRating();
                };
            }
        }, false);
    },

    _removeRating: function(rateVal, proConItem) {
        var rating     = document.getElementsByClassName('rating')[0],
            userRating = rating.getElementsByClassName('user-rating');
        for (var i=0; i < userRating.length; i++) {
            userRating[i].className = userRating[i].className + ' animate';
        }
        setTimeout(function() {
            for (var i=0; i < userRating.length; i++) {
                rating.removeChild(userRating[i]);
            }
        }, 350);

        if (rateVal != undefined && proConItem != undefined) {
            rating.className = rating.className + ' hide';
            setTimeout(function() {
                rating.innerHTML = rateVal;
                rating.classList.remove('hide');

                // Call action to save this new rate
                ProConActions.rate(proConItem.id, rateVal);
                setTimeout(function() {
                    rating.className = rating.className + ' hide';
                    rating.innerHTML = 'Rate here';
                    rating.classList.remove('hide');
                }, 400);
            }, 150);
        };
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
            <div className="rateStars">
                <i className="rating fa fa-star">Rate here</i>
            </div>
        );
    },

});

module.exports = InputRateStars;
