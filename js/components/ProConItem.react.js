
var React = require('react');

var ProConItem = React.createClass({

    displayName: 'ProConItem',

    render: function() {
        return <span>{this.props.data.text}</span>;
    }
});

module.exports = ProConItem;
