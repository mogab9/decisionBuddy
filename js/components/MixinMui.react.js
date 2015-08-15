/**
* Mixin used to load base element for material-ui rendering into your views
*/
var React        = require('react'),
    mui          = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager();

var MixinMui = {
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },
};

module.exports = MixinMui;
