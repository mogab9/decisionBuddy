
var React             = require('react'),
    InputTextQuestion = require('./InputTextQuestion.react');

var ViewHome = React.createClass({

  displayName: 'ViewHome',

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="Home">
        <InputTextQuestion />
      </div>
    );
  },

});

module.exports = ViewHome;
