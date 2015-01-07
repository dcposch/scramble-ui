var React = require("react/addons");
var Moment = require("moment-component");

module.exports = React.createClass({
  propTypes: {
    "from": React.PropTypes.string,
    "to": React.PropTypes.array,
    "date": React.PropTypes.string,
    "bodySanitizedHTML": React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <small className="received pull-right">{this.props.date}</small>
            <div className="from">{this.props.from}</div>
            <small className="to">to {this.props.to.join(",")}</small>
            <small><a href="#" className="pull-right">Show Original</a></small>
          </div>

          <div className="panel-body" dangerouslySetInnerHTML={{__html:this.props.bodySanitizedHtml}} />
        </div>

        <div className="email-compose"></div>
      </div>
    );
  }
});

