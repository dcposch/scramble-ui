var React = require("react");
var ScrambleUI = require("..");
var Tab = ScrambleUI.Tab;
var componentNames = ["SearchList", "Message", "MessageThread", "Contact"];
// Bug somewhere in Reactify: when I make this a loop, it no longer works :(
var components = {};
components["SearchList"] = require("./ExampleSearchList.jsx");
components["Message"] = require("./ExampleMessage.jsx");
components["MessageThread"] = require("./ExampleMessageThread.jsx");
components["Contact"] = require("./ExampleContact.jsx");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      "selectedTab": "SearchList",
      "tabs": componentNames
    };
  },

  onSelectTab: function(tab) {
    this.setState({"selectedTab":tab});
  },

  render: function() {
    var componentName = this.state.selectedTab;
    var ExampleElem = components[componentName];
    return (
      <div>
        <Tab tabs={this.state.tabs} brandElement="Scramble UI" onSelect={this.onSelectTab} />
        <ExampleElem />
        <div className="footer"></div>
      </div>
    );
  }
});

