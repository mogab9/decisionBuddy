var React        = require('react'),
    Router       = require('react-router'),
    Menu         = require('./Menu.react'),
    RouteHandler = Router.RouteHandler;

var App = React.createClass({

    displayName: 'AppView',

    render: function () {
        return (
            <div className="App">
                <RouteHandler/>
                <br/>
                <Menu/>
            </div>
        )
    }
});

module.exports = App;
