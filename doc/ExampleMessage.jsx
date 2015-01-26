var React = require("react");
var SearchList = require("..").SearchList;
var Message = require("..").Message;
var Dictionary = require("./Dictionary.js");
var DictWords = Object.keys(Dictionary).sort()
  .filter(function(x){return x>="A"});

module.exports = React.createClass({
  render: function() {
    var subject = "This is just to say";
    var body = "i drank the beers<br/>"+
      "that were in the fridge<br/>"+
      "and which you were probably<br/>"+
      "keeping<br/>"+
      "for tonight<br/>"+
      "sorry bro";
    var date = "2012-01-01";
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
            <Message from="bob@mcbobs.com" to={["joe@mcbobs.com"]} subject={subject} bodySanitizedHtml={body} date={date}/>
          </div>
        </div>
      </div>);
  }
});

