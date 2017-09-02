import { ADD_REMINDER, DEL_REMINDER } from './../constant/constant.js';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders;
} 

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      return reminders;
    case DEL_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    default:
      return state;
  }
}

export default reminders;