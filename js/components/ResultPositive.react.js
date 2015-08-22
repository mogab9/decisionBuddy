
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
          <div className="proColor">Do it! Pros overcome Cons.</div>
        );
    },

});

module.exports = ResultPositive;
