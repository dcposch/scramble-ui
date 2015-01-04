var React = require("react");
var ReactAddons = require("react-addons");

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.any.isRequired,
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  onClick: function() {
    if(this.props.onClick) {
      this.props.onClick(this.props.data);
    }
  },

  render: function() {
    var classes = ReactAddons.classSet({
      "list-group-item": true,
      "active": this.props.selected
    });
    return (<a href="#" className={classes} onClick={this.onClick}>
          {this.props.children} 
        </a>);
  }
});
