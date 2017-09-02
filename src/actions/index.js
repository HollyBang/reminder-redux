import { ADD_REMINDER, DEL_REMINDER } from './../constant/constant.js';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
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