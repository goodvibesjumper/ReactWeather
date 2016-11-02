var React = require('react');

var About = (props) => { // new stateless functional component
  return (
    <div>
      <h1 classname="text-center">About</h1>
      <p>React Weather App is the bomb-diggity.</p>
      <p>Who even says that anymore?  bomb diggity</p>
      <p>Homie please..</p>
      <p>Here are some links to check out</p>
      <ol>
        <li>
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">Andrew Mead's Course on Udemy</a>
        </li>
        <li>
          <a href="https://github.com/goodvibesjumper/ReactWeather">Github Project Repository</a>
        </li>
        <li>
          <a href="https://www.heroku.com">Heroku</a>
        </li>
        <li>
          <a href="https://foundation.zurb.com">ZURB Foundation</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
