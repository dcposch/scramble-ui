var React = require("react");
var Message = require("..").Message;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>MessageThread</h1>
            <p>Shows a conversation. See <code>Message</code>.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          </div>
        </div>
      </div>);
  }
});

