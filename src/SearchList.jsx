var React = require("react");
var BS = require("react-bootstrap");
var SearchListItem = require("./SearchListItem");


module.exports = React.createClass({
  displayName: "SearchList",

  propTypes: {
    data: React.PropTypes.array.isRequired,
    elementFunc: React.PropTypes.func.isRequired,
    keyFunc: React.PropTypes.func,
    onSearch: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    pageSize: React.PropTypes.number
  },

  getInitialState: function() {
    return {selected: null, query: "", page:1};
  },

  getDefaultProps: function() {
    return {
      keyFunc: function(d){return d},
      onSelect: function(){},
      pageSize:10
    };
  },

  onClickItem: function(d) {
    this.setState({selected: d});
    this.props.onSelect(d);
  },

  onSearchType: function(ev) {
    // TODO: pagination
    this.props.onSearch(ev.target.value);
  },

  onPageLeft: function() {
    this.setState({page: this.state.page-1});
  },

  onPageRight: function() {
    this.setState({page: this.state.page+1});
  },

  render: function() {
    // Fetch the current page of data
    var data = this.props.data;
    var dataIsArray = data.hasOwnProperty("length");
    var dataLen = dataIsArray ? data.length : data.size();
    var ixMin = (this.state.page-1)*this.props.pageSize;
    var ixMax = Math.min(dataLen, ixMin+this.props.pageSize);
    var dataSlice = dataIsArray ? data.slice(ixMin, ixMax) : data.get(ixMin, ixMax);

    // Convert each item to a React element
    var elems = dataSlice.map(function(d){
      var elem = this.props.elementFunc(d);
      var key = this.props.keyFunc(d);
      var sel = this.state.selected === key;
      if(!key) {
        throw "SearchList couldn't get key for data " + d;
      }
      return (
        <SearchListItem key={key} onClick={this.onClickItem.bind(this, key)} selected={sel}>
          {elem}
        </SearchListItem>);
    }.bind(this));

    // Return the list, complete with search bar and pagination
    var leftDisabled = (ixMin===0), rightDisabled = (ixMax===dataLen);
    return (
      <div>
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

