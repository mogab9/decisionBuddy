
var React    = require('react'),
    mui      = require('material-ui'),
    MixinMui = require('./MixinMui.react');

var ResultPositive = React.createClass({

    displayName: 'ResultPositive',
    mixins:      [MixinMui],

    /**
    * @return {object}
    */
    render: function() {
        return (
          <div>Do it!</div>
        );
    },

});

module.exports = ResultPositive;
