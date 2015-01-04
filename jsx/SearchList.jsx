
var React = require("react");

module.exports = React.createClass({
  propTypes: {
    elementFunc: React.PropTypes.func.isRequired,
    searchFunc: React.PropTypes.func.isRequired
  },

  render: function() {
    var data = this.props.data;
    return (<div>SearchList...</div>);
  }
});

