import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from './../../actions';


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addReminder() {
    this.props.addReminder(this.state.text);
  }

  
  render() {
    console.log('this.props ', this.props);
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
            onChange={event => this.setState({text: event.target.value})}
          />
          <RaisedButton 
            label="Primary"
            primary={true}
            style={style}
            onClick={() => this.addReminder()}
            />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder })(App);