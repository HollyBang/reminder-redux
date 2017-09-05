import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addReminder, delReminder, clearReminders } from './../../actions';


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import { lightBlue500 } from 'material-ui/styles/colors';
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
    this.props.addReminder(this.state.text, this.state.remDate);
    this.setState({
      text: '',
      remDate: ''
    });
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
        tooltipPosition="top-left"
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
                    <MenuItem onClick={() => this.delReminder(reminder.id)}>Delete Reminder</MenuItem>
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
          Reminders
        </div>
        <div className="form">
          <TextField
            value = {this.state.text}
            hintText="mb, will u gonna to the store?"
            floatingLabelText="Write reminder here!"
            onChange={event => this.setState({ text: event.target.value })}
          />
          <DatePicker
            value = {this.state.remDate}
            hintText="Date picker"
            onChange={( event, date) => this.setState({ remDate: date })}
          />
          <RaisedButton
            label="Add Reminder"
            primary={true}
            style={style.button}
            onClick={() => this.addReminder()}
          />
          <Divider />
          {this.renderReminders()}
          <Divider />
          <RaisedButton 
            label="Clear all reminders"
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