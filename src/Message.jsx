var React = require("react");

module.exports = React.createClass({
  propTypes: {
    "from": React.PropTypes.string,
    "to": React.PropTypes.array,
    "body": React.PropTypes.string
  },
  render: function() {
    if(!this.props.name) {
      return (<div />);
    }
    return (
      <div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <small className="received pull-right">{{formatDate time format="lll"}}</small>
                <div className="from">
                    {this.props.from}
                </div>
                <small className="to">to 
                    {this.props.to.join(",")}
                </small>
                <small><a href="#" className="pull-right">Show Original</a></small>
            </div>

            <div id="body-{{hexMsgID}}" className="email-body panel-body {{#unless htmlBody}}still-decrypting{{/unless}}">{this.props.body}</div>
            <div className="panel-body">{this.props.body}</div>
        </div>

        <div className="email-compose"></div>
    </div>
  }
});

