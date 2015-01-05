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
            <h1>Contact</h1>
            <p>Shows one contact address. One contact always has a single address.</p>
            <p>It can have a name, and can point to a Keybase account. It can have a PGP key.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          </div>
        </div>
      </div>);
  }
});
