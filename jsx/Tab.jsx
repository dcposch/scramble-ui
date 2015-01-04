var React = require("react");

/**
 * Creates a Bootstrap tab bar.
 * 
 * All it needs is a list of tabs.
 * 
 * You can give it an optional "brand" element (top left, link to /) and optional right element (top right, right aligned text).
 */
module.exports = React.createClass({
  propTypes: {
    brandElement: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.node]),
    rightElement: React.PropTypes.element,
    tabs: React.PropTypes.arrayOf(React.PropTypes.node)
  },

  render: function() {
    var { tabs, brandElement, rightElement, ...other } = this.props;
    var brandElem = brandElement ? (<a className="navbar-brand" href="/">{brandElement}</a>) : null;
    var rightElem = rightElement ? (<p className="navbar-text navbar-right">{rightElement}</p>) : null;
    return (
      <div className="navbar navbar-default" {...other} >
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse">
              <span className="sr-only">Toggle navigation</span>
              {tabs.map(function(t){
                return (<span className="icon-bar"></span>);
              })}
            </button>
            {brandElem}
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {tabs.map(function(t){
                return (<li><a href="#">{t}</a></li>);
              })}
            </ul>
            {rightElem}
          </div>
        </div>
      </div>
    );
  }
});
