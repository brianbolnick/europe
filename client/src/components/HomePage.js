import React, { Component } from 'react';
import Countdown from './Countdown'


class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="spacer"></div>
        <div className="container">
          <div className="todos">
            todo stuff
          </div>
          <div className="countdown">
            <Countdown date={`${2018}-08-21T16:45:00`} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
