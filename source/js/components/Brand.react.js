var React = require('react');

var Brand = React.createClass({
  render: function () {

    var h1Style = {
      color: '#e74c3c',
      fontSize: '28px',
      fontWeight: '600',
      textTransform: 'uppercase',
      textAlign: 'center'
    };

    return (
      <h1 style={h1Style}>Brand</h1>
    );
  }
});

module.exports = Brand;
