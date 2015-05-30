var React = require('react');
var Brand = require('./Brand.react');
var Navigation = require('./Navigation.react');

var Header = React.createClass({
  render: function () {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      margin: '40px 0',
      overflow: 'hidden'
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div style={containerStyle}>

            <div className="col-sm-5">
              <Brand />
            </div>

            <div className="col-sm-7">
              <Navigation />
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
