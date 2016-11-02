var React = require('react')

var WeatherMessage = ({temp, location}) => { // new stateless functional component
  return (
    <h3>It's {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
