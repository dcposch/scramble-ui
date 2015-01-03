var React = require("react");
var Tab = require("./Tab.jsx");
var SearchList = require("./SearchList.jsx");
var Message = require("./Message.jsx");
var Contact = require("./Contact.jsx");

var page = (
    <div>
        <Tab tabs={["Tab", "SearchList", "Message", "Contact"]} brandElement="Scramble UI" />
        <div className="container">
            <SearchList />
            <Message />
        </div>
    </div>);

React.render(page, document.body);

