import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  render() {
    return (
      <div className='widget'>
        <h1>Clock</h1>
        <div className='clock'>
          <p>
            <span> Time: </span>
            <span> { this.state.time.toTimeString() } </span>
          </p>
          <p>
            <span> Date: </span>
            <span> { this.state.time.toDateString() } </span>
          </p>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.tickInterval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval)
    this.tickInterval = null;
  }

  tick() {
    this.setState( { time: new Date() } )
  }
}

export default Clock;
