var React = require("react");
var SearchList = require("..").SearchList;

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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>SearchList</h1>
              <p>SearchList represents a searchable, infinite-scrolling view into some data.
              The data is not presented as a flat list, but as a result set.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 split-screen">
              <SearchList searchFunc={this.searchPeople} elementFunc={this.personToListElem} onSelect={this.onSelect} />
            </div>
            <div className="col-md-6 split-screen">
              <Message name={this.state.selected} />
            </div>
          </div>
        </div>
      </div>);
  }
});

