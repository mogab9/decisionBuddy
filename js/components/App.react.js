var React        = require('react'),
    Router       = require('react-router'),
    RouteHandler = Router.RouteHandler;

var App = React.createClass({

    displayName: 'AppView',

    render: function () {
        return (
            <div className="App">
                <RouteHandler/>
            </div>
        )
    }
});

module.exports = App;
