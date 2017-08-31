import { ADD_REMINDER } from './../constant/constant.js';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminder in state ', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;