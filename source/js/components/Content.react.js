var React = require('react');
var Brand = require('./Brand.react');
var Navigation = require('./Navigation.react');

var Content = React.createClass({
  render: function () {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '30px 0',
      borderTop: '1px solid #ddd',
      overflow: 'hidden'
    };

    var contentHeaderStyle = {
      fontSize: '26px',
      lineHeight: '36px',
      fontWeight: '300',
      margin: '0 0 30px 0',
      textTransform: 'uppercase'
    };

    var contentStyle = {
      fontSize: '20px',
      margin: 0
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle}>

            <div className="col-sm-12">
              <h3 style={contentHeaderStyle}>Content Header</h3>
              <p style={contentStyle}>

                Your content goes here...

              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Content;
