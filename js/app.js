
var React         = require('react'),
    Router        = require('react-router'),
    Route         = Router.Route,
    DefaultRoute  = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    App           = require('./components/App.react.js'),
    ViewHome      = require('./components/ViewHome.react.js'),
    ViewRate      = require('./components/ViewRate.react.js'),
    ViewResult    = require('./components/ViewResult.react.js');

// declare our routes and their hierarchy
var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute handler={ViewHome} />
    <NotFoundRoute handler={ViewHome} />

    <Route name="rate" handler={ViewRate} path="/rate"/>
    <Route name="result" handler={ViewResult} path="/result"/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('decisionbuddyapp'));
});
