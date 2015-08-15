
var React           = require('react'),
    Router          = require('react-router'),
    mui             = require('material-ui'),
    MixinMui        = require('./MixinMui.react'),
    ProConStore     = require('../stores/ProConStore'),
    ProConItem      = require('./ProConItem.react'),
    RatingButtons   = require('./RatingButtons.react');

var InputRate = React.createClass({

    displayName: 'InputRate',
    mixins:      [MixinMui, Router.Navigation],

    /**
    * @return {object}
    */
    render: function() {
        var proConToRate = ProConStore.getNextUnmarkedProCon();
        // no pro in list and no con in list, redirect to home page
        if (proConToRate == false)
            this.transitionTo('/');
        // no more pro/con to rate, redirect to result page
        if (proConToRate == true)
            this.transitionTo('result');
        return (
            <div className="proConRate">
                <ul className="proConRate">
                    <li><ProConItem data={proConToRate} /></li>
                </ul>
                <RatingButtons />
            </div>
        );
    },

});

module.exports = InputRate;
