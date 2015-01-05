var React = require("react");
var SearchList = require("..").SearchList;
var Message = require("..").Message;
var Dictionary = require("./Dictionary.js");
var DictWords = Object.keys(Dictionary).sort()
  .filter(function(x){return x>="A"});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Message</h1>
            <p>Message shows one email. See <code>MessageThread</code>.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          </div>
        </div>
      </div>);
  }
});

