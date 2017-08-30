import React, { Component } from 'react';


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

  
  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="App">
        <div className="title">
          Title
        </div>
        <div className="form">
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
          <RaisedButton label="Primary" primary={true} style={style} />
        </div>
      </div>
    );
  }
  
}

export default App;