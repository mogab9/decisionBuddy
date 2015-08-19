
var React          = require('react'),
    Router         = require('react-router'),
    mui            = require('material-ui'),
    MixinMui       = require('./MixinMui.react'),
    ResultPositive = require('./ResultPositive.react'),
    ResultMixed    = require('./ResultMixed.react'),
    ResultNegative = require('./ResultNegative.react'),
    ProConItem     = require('./ProConItem.react'),
    ProConStore    = require('../stores/ProConStore');

var Result = React.createClass({

    displayName: 'Result',
    mixins:      [MixinMui, Router.Navigation],

    getInitialState: function() {
        return {
            proConList: ProConStore.getAll(),
            result:     ProConStore.getResult()
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
        var proConList = [this.state.proConList.pros, this.state.proConList.cons];
        return (
            <div id="result">
                <h1>Result</h1>
                {resultView}
                <h1>Recap</h1>
                <p>{this.state.result.proPct}% Pros / {this.state.result.conPct}% Cons</p>
                <ul>
                    {proConList.map(function(list) {
                        return list.map(function(object) {
                            return <ProConItem data={object} />;
                        });
                    })}
                </ul>
            </div>
        );
    },

});

module.exports = Result;
