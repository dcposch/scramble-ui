var React = require("react/addons");
var ReactAddons = React.addons;

module.exports = React.createClass({
  displayName: "SearchListItem",

  propTypes: {
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selected:false,
      onClick:function(){}
    };
  },

  render: function() {
    var classes = ReactAddons.classSet({
      "list-group-item": true,
      "active": this.props.selected
    });
    return (
      <a href="#" className={classes} onClick={this.props.onClick}>
        {this.props.children} 
      </a>);
  }
});
