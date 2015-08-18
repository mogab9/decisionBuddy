
var React          = require('react'),
    Router         = require('react-router'),
    mui            = require('material-ui'),
    MixinMui       = require('./MixinMui.react'),
    ResultPositive = require('./ResultPositive.react'),
    ResultMixed    = require('./ResultMixed.react'),
    ResultNegative = require('./ResultNegative.react'),
    ProConStore    = require('../stores/ProConStore');

var Result = React.createClass({

    displayName: 'Result',
    mixins:      [MixinMui, Router.Navigation],

    getInitialState: function() {
        return {
            result: ProConStore.getResult()
        };
    },

    getResultView: function() {
        if (this.state.result.proPct > 66)
            return <ResultPositive />;
        else if (this.state.result.proPct >= 50 && this.state.result.proPct <= 66)
            return <ResultMixed />;
        else
            return <ResultNegative />;
    },

    /**
    * @return {object}
    */
    render: function() {
        // if error: return to home
        if (this.state.result.error != undefined) {
            this.transitionTo('/');
            return <span/>;
        }
        var resultView = this.getResultView();
        return (
          <div className="result">
              {resultView}
          </div>
        );
    },

});

module.exports = Result;
