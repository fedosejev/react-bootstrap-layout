var React = require('react');

var Introduction = React.createClass({
  render: function () {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '0 0 30px 0',
      overflow: 'hidden'
    };

    var introductionHeaderStyle = {
      fontSize: '26px',
      lineHeight: '36px',
      fontWeight: '300',
      margin: '0 0 30px 0',
      textTransform: 'uppercase'
    };

    var buttonStyle = {
      fontWeight: 600,
      textTransform: 'uppercase',
      marginBottom: '50px'
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle}>

            <div className="col-sm-12">
              <h2 style={introductionHeaderStyle}>
                This <strong>responsive</strong> web page is built with <strong>Bootstrap</strong> layout and <strong>React.js</strong> components.
              </h2>
              <a className="btn btn-danger btn-lg" style={buttonStyle} href="https://github.com/fedosejev/react-bootstrap-layout">Find out how now</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Introduction;
