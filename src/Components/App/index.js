import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addReminder, delReminder, clearReminders } from './../../actions';


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import { lightBlue500, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      remDate: ''
    }
  }


  addReminder() {
    console.log(this.state);
    this.props.addReminder(this.state.text, this.state.remDate);
  }

  delReminder(id) {
    this.props.delReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={lightBlue500} />
      </IconButton>
    );

    return (
      <List>
        {
          reminders.map(reminder => {
            return (
              <ListItem
                key={reminder.id}
                rightIconButton={
                  <IconMenu iconButtonElement={iconButtonElement}>
                    <MenuItem onClick={() => this.delReminder(reminder.id)}>Delete</MenuItem>
                  </IconMenu>
                }
                primaryText={reminder.text}
                secondaryText={reminder.remDate}
              />
            )
          })
        }
      </List>
    )
  }

  render() {
    const style = {
      button: {
        margin: 12,
      },
      App: {
        maxWidth: 257,
        margin: '0 auto'
      }
    };
    return (
      <div className="App" style={style.App}>
        <div className="title">
          Title
        </div>
        <div className="form">
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
            onChange={event => this.setState({ text: event.target.value })}
          />
          <DatePicker
            hintText="Portrait Dialog"
            onChange={( event, date) => this.setState({ remDate: date })}
          />
          <RaisedButton
            label="Primary"
            primary={true}
            style={style.button}
            onClick={() => this.addReminder()}
          />
          <Divider />
          {this.renderReminders()}
          <Divider />
          <RaisedButton 
            label="Secondary"
            secondary={true}
            style={style.button} 
            onClick={() => this.props.clearReminders()} 
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

export default connect(mapStateToProps, { addReminder, delReminder, clearReminders })(App);