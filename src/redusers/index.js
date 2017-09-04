import { ADD_REMINDER, DEL_REMINDER, CLEAR_REMINDER } from './../constant/constant.js';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
  let { text, remDate } = action;
  return {
    id: Math.random(),
    text,
    remDate
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders;
} 

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      return reminders;
    case DEL_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDER:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;