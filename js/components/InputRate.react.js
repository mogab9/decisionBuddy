
var React         = require('react'),
    Router        = require('react-router'),
    mui           = require('material-ui'),
    MixinMui      = require('./MixinMui.react'),
    ProConStore   = require('../stores/ProConStore'),
    ProConItem    = require('./ProConItem.react'),
    InputRateStars = require('./InputRateStars.react');

var InputRate = React.createClass({

    displayName: 'InputRate',
    mixins:      [MixinMui, Router.Navigation],

    componentDidMount: function() {
        ProConStore.addChangeListener(this._handleOnChange);
    },

    componentWillUnmount: function() {
        ProConStore.removeChangeListener(this._handleOnChange);
    },

    getInitialState: function() {
        return {
            proConToRate: ProConStore.getNextUnmarkedProCon()
        };
    },

    _handleOnChange: function(e) {
        this.setState({
            proConToRate: ProConStore.getNextUnmarkedProCon()
        });
    },

    /**
    * @return {object}
    */
    render: function() {
        // no pro in list and no con in list, redirect to home page
        if (this.state.proConToRate == false)
            this.transitionTo('/');
        // no more pro/con to rate, redirect to result page
        if (this.state.proConToRate == true)
            this.transitionTo('result');
        return (
            <div className="proConRate">
                <ul className="proConRate">
                    <ProConItem data={this.state.proConToRate} />
                </ul>
                <h1>Rate Importance</h1>
                <InputRateStars proConItem={this.state.proConToRate} />
            </div>
        );
    },

});

module.exports = InputRate;
