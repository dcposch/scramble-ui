var React = require("react");
var Tab = require("./Tab.jsx");
var SearchList = require("./SearchList.jsx");
var Message = require("./Message.jsx");
var Contact = require("./Contact.jsx");


module.exports = React.createClass({
  getInitialState: function() {
    return {
      "people": [
        "Bob Chen", 
        "Bob Smith", 
        "John Smith",
        "Bille Bob Joe", 
        "Woodhouse"],
      "selected": null
    };
  },

  searchPeople: function(str){
    str = str.toLowerCase();
    return this.state.people.filter(function(p){
      return p.toLowerCase().indexOf(str) > -1;
    });
  },

  personToListElem: function(str) {
    return (<div>{str}</div>);
  },

  onSelect: function(item){
    this.setState({"selected":item});
  },

  render: function() {
    return (
      <div>
        <Tab tabs={["Tab", "SearchList", "Message", "Contact"]} brandElement="Scramble UI" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 split-screen">
              <SearchList searchFunc={this.searchPeople} elementFunc={this.personToListElem} onSelect={this.onSelect} />
            </div>
            <div className="col-md-8 split-screen">
              <Message name={this.state.selected} />
            </div>
          </div>
        </div>
      </div>);
  }
});

