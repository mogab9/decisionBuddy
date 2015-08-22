
var React    = require('react'),
    mui      = require('material-ui'),
    MixinMui = require('./MixinMui.react');

var ResultMixed = React.createClass({

    displayName: 'ResultMixed',
    mixins:      [MixinMui],

    /**
    * @return {object}
    */
    render: function() {
        return (
          <div className="mixedColor">Result is mixed. Don't do it or think twice about it before you do it.</div>
        );
    },

});

module.exports = ResultMixed;
