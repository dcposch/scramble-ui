var React = require("react");
var SearchList = require("..").SearchList;
var Message = require("..").Message;

var fs = require("fs");
var dictionaryJson = fs.readFileSync(__dirname + '/dictionary.json', 'utf8');
var Dictionary = JSON.parse(dictionaryJson);
var DictWords = Object.keys(Dictionary)
  .sort()
  .filter(function(x){return x>="A"});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      "selected": null
    };
  },

  searchWords: function(str){
    str = str.toUpperCase();
    var ppl = DictWords.filter(function(p){
      return p.indexOf(str) > -1;
    });
    return ppl;
  },

  wordToListElem: function(str) {
    return (<div>{str}</div>);
  },

  onSelect: function(item){
    this.setState({"selected":item});
  },

  render: function() {
    var word = this.state.selected;
    var definition = Dictionary[word];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>SearchList</h1>
            <p>SearchList represents a searchable, paginated view into some data.</p>
            <p>SearchList fetches data asynchronously. Just define the <code>searchFunc</code> callback. 
            The result can either be a flat array or a result set defining <code>.size()</code> and <code>.get(from, to)</code>.</p>
            <p>Finally, define the <code>elementFunc</code> callback to map items from your dataset to React components, which will be rendered into a list.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 split-screen">
            <SearchList 
              data={DictWords}
              searchFunc={this.searchWords} 
              elementFunc={this.wordToListElem} 
              onSelect={this.onSelect} />
          </div>
          <div className="col-md-6 split-screen">
            <h1>{word}</h1>
            <div>
            {definition}
            </div>
          </div>
        </div>
      </div>);
  }
});

