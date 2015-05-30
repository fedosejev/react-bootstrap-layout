var React = require('react');
var Brand = require('./Brand.react');
var Navigation = require('./Navigation.react');

var Footer = React.createClass({
  render: function () {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '40px 0',
      borderTop: '1px solid #ddd',
      overflow: 'hidden',
      backgroundColor: '#555',
      color: '#ccc'
    };

    var footerContentStyle = {
      fontSize: '16px',
      fontWeight: '200',
      margin: 0
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle} data-style-footer>

            <div className="col-sm-12">
              <p style={footerContentStyle}>

                Built by <a href="http://artemij.com">Artemij Fedosejev</a> in 2015

              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
