import React from 'react';

class Autocomplete extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputVal: ''};
  }

  render() {
    return (
      <div className='widget'>
        <input value={this.state.inputVal}></input>
        <ul>
          {
            this.props.names.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Autocomplete
