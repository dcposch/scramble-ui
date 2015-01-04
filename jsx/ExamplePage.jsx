var React = require("react");
var Tab = require("./Tab.jsx");
var SearchList = require("./SearchList.jsx");
var Message = require("./Message.jsx");
var Contact = require("./Contact.jsx");

var page = (
  <div>
    <Tab tabs={["Tab", "SearchList", "Message", "Contact"]} brandElement="Scramble UI" />
    <div className="container">
      <div className="row">
        <div className="col-md-4 split-screen">
          <SearchList />
        </div>
        <div className="col-md-8 split-screen">
          <Message />
        </div>
      </div>
    </div>
  </div>);

React.render(page, document.body);

