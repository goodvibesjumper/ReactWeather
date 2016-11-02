var React = require('react');
var Nav = require('Nav');

var Main = (props) => { // new stateless functional component
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
    );
};

module.exports = Main;
