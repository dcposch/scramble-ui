var React = require("react");
var ScrambleUI = require("..");
var Tab = ScrambleUI.Tab;
var ExampleSearchList = require("./ExampleSearchList.jsx");


module.exports = React.createClass({
  getInitialState: function() {
    return {
      "selectedTab": "SearchList",
      "tabs": ["SearchList", "Message", "Contact"]
    };
  },

  onSelectTab: function(tab) {
    this.setState({"selectedTab":tab});
  },

  render: function() {
    var ExampleElem = require("./Example"+this.state.selectedTab+".jsx");
    return (
      <div>
        <Tab tabs={this.state.tabs} brandElement="Scramble UI" onSelect={this.onSelectTab} />
        <ExampleElem />
        <div className="footer"></div>
      </div>
    );
  }
});

