var React = require("react");
var BS = require("react-bootstrap");
var SearchListItem = require("./SearchListItem");

module.exports = React.createClass({
  propTypes: {
    searchFunc: React.PropTypes.func.isRequired,
    elementFunc: React.PropTypes.func.isRequired,
    pageSize: React.PropTypes.number,
    onSelect: React.PropTypes.func
  },

  getInitialState: function() {
    return {selected: null, query: "", page:1};
  },

  getDefaultProps: function() {
    return {pageSize:10};
  },

  onClickItem: function(d) {
    this.setState({selected: d});
    if(this.props.onSelect){
      this.props.onSelect(d);
    } 
  },

  onSearchType: function(ev) {
    this.setState({query: ev.target.value, page:1});
  },

  onPageLeft: function() {
    this.setState({page: this.state.page-1});
  },

  onPageRight: function() {
    this.setState({page: this.state.page+1});
  },

  render: function() {
    // Fetch the current page of data
    var data = this.props.searchFunc(this.state.query);
    var dataIsArray = data.hasOwnProperty("length");
    var dataLen = dataIsArray ? data.length : data.size();
    var ixMin = (this.state.page-1)*this.props.pageSize;
    var ixMax = Math.min(dataLen, ixMin+this.props.pageSize);
    var dataSlice = dataIsArray ? data.slice(ixMin, ixMax) : data.get(ixMin, ixMax);

    // Convert each item to a React element
    var elems = dataSlice.map(function(d){
      var sel = this.state.selected === d;
      var elem = this.props.elementFunc(d);
      return (<SearchListItem onClick={this.onClickItem} key={d} data={d} selected={sel}>
          {elem}
        </SearchListItem>);
    }.bind(this));

    // Return the list, complete with search bar and pagination
    var leftDisabled = (ixMin===0), rightDisabled = (ixMax===dataLen);
    return (<div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" onChange={this.onSearchType}></input>
          </div>
          <div className="list-group">
            {elems}
          </div>
          <div className="text-center">
            <em>
              <BS.Button onClick={leftDisabled?null:this.onPageLeft} bsStyle="link" bsSize="small" disabled={leftDisabled}>
                <i className="glyphicon glyphicon-chevron-left"></i>
              </BS.Button>
              &nbsp;&nbsp;
              Showing {ixMin+1} to {ixMax} of {dataLen}
              &nbsp;&nbsp;
              <BS.Button onClick={rightDisabled?null:this.onPageRight} bsStyle="link" bsSize="small" disabled={rightDisabled}>
                <i className="glyphicon glyphicon-chevron-right"></i>
              </BS.Button>
            </em>
          </div>
      </div>);
  }
});

