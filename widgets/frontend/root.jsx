import React from 'react';
import Clock from './clock';
import Weather from './weather'
import Autocomplete from './autocomplete'

class Root extends React.Component {
  render() {
    return (
      <div>
        I am root
        <Clock/>
        <Weather/>
        <Autocomplete names={
            [
              "Brady",
              "Weezy",
              "Yeezy",
              "Easy E",
              "Too Short",
              "E40",
              "Iamsu"
            ]
          }/>
      </div>
    );
  }
}

export default Root;
