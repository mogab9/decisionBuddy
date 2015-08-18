
var React  = require('react'),
    Result = require('./Result.react');

var ViewResult = React.createClass({

    displayName: 'ViewResult',

    /**
    * @return {object}
    */
    render: function() {
        return (
            <div className="Result">
                <Result />
            </div>
        );
    },

});

module.exports = ViewResult;
