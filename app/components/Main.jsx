var React = require('react');
var Nav = require('Nav');

var Main = (props) => { // new stateless functional component
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    );
};

module.exports = Main;
