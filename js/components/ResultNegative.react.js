
var React    = require('react'),
    mui      = require('material-ui'),
    MixinMui = require('./MixinMui.react');

var ResultNegative = React.createClass({

    displayName: 'ResultNegative',
    mixins:      [MixinMui],

    /**
    * @return {object}
    */
    render: function() {
        return (
          <div>Don't do it. Pro do not overcome Cons!</div>
        );
    },

});

module.exports = ResultNegative;
