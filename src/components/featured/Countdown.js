import React, { Component } from 'react';

// Third Pary Components
import Slide from "react-reveal/Slide";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: "Dec, 31, 2022",
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0"
    };

  }
    
    getTimeUntil(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      if (time < 0) {
        console.log("Date Passed");
      } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
        this.setState({
          days,
          hours,
          minutes,
          seconds
        });

        // console.log(this.setState.days);
      }
    }
  
    componentDidMount() {
      setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }
  
    render() {
      return (
        <Slide left delay={1000}>
          <div className="countdown_wrapper">
            <div className="countdown_top">Event Starts in</div>
            <div className="countdown_bottom">
              <div className="counter_item">
                <div className="countdown_time">
                  {this.state.days}
                  <div className="countdown_tag">Days</div>
                </div>
              </div>
              <div className="counter_item">
                <div className="countdown_time">
                  {this.state.hours}
                  <div className="countdown_tag">Hours</div>
                </div>
              </div>
              <div className="counter_item">
                <div className="countdown_time">
                  {this.state.minutes}
                  <div className="countdown_tag">Minutes</div>
                </div>
              </div>
              <div className="counter_item">
                <div className="countdown_time">
                  {this.state.seconds}
                  <div className="countdown_tag">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      );
    }
  }
  
  export default Countdown;

