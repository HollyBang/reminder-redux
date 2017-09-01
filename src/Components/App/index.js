import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addReminder } from './../../actions';


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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
  renderReminders() {
    const { reminders } = this.props;
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );
    return (
      <List>
        {
          reminders.map(reminder => {
            return (
              <ListItem
                key={reminder.id}
                rightIconButton={rightIconMenu}
                primaryText={reminder.text}
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
        maxWidth: 300
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
          <RaisedButton
            label="Primary"
            primary={true}
            style={style.button}
            onClick={() => this.addReminder()}
          />
          {this.renderReminders()}
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