var React = require("react");

module.exports = React.createClass({
  propTypes: {
    "name": React.PropTypes.string.isRequired
  },
  render: function() {
    if(!this.props.name) {
      return (<div />);
    }
    return (<h1>Hello, {this.props.name}</h1>);
  }
});

