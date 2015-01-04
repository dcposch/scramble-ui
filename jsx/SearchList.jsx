var React = require("react");
var SearchListItem = require("./SearchListItem.jsx");

module.exports = React.createClass({
  propTypes: {
    elementFunc: React.PropTypes.func.isRequired,
    searchFunc: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func
  },

  getInitialState: function() {
    return {selected: null, query: ""};
  },

  onClickItem: function(d) {
    this.setState({"selected":d});
    if(this.props.onSelect){
      this.props.onSelect(d);
    } 
  },

  onSearchType: function(ev) {
    this.setState({"query": ev.target.value});
  },

  onSearchClick: function(d) {
    console.log("Search button clicked");
  },

  render: function() {
    var data = this.props.searchFunc(this.state.query);
    var elems = data.map(function(d) {
      var sel = this.state.selected === d;
      var elem = this.props.elementFunc(d);
      return (<SearchListItem onClick={this.onClickItem} data={d} selected={sel}>
          {elem}
        </SearchListItem>);
    }.bind(this));

    var input 
    return (<div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" onChange={this.onSearchType}></input>
          </div>
        </div>
        <div className="col-md-12">
          <div className="list-group">
            {elems}
          </div>
        </div>
      </div>);
  }
});

