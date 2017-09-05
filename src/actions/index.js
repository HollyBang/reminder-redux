import { ADD_REMINDER, DEL_REMINDER, CLEAR_REMINDER } from './../constant/constant.js';

export const addReminder = (text, remDate) => {
  remDate = !remDate
    ? 'forgot date?'
    : `${remDate.getFullYear()}-${remDate.getDate()}-${remDate.getMonth() + 1}`;
  
    text = !text ? 'forgot the reminder?' : text;
  
    const action = {
    type: ADD_REMINDER,
    text,
    remDate
  }
  return action;
}

export const delReminder = (id) => {
  const action = {
    type: DEL_REMINDER,
    id
  }
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDER
  }
}