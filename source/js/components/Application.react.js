var React = require('react');
var Header = require('./Header.react');
var Introduction = require('./Introduction.react');
var Content = require('./Content.react');
var Footer = require('./Footer.react');

var Application = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Introduction />
        <Content />
        <Content />
        <Content />
        <Footer />
      </div>
    );
  }
});

module.exports = Application;
