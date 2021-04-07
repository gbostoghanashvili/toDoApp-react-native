import {actionTypes} from "../action";
import { combineReducers } from 'redux';

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.setTasks:
      return action.payload;
    case actionTypes.add:
      return [action.payload, ...state];
    case actionTypes.remove:
      return state.filter(task => task._id !== action.payload);
    case actionTypes.editTitle:
      const {id, title} = action
      return state.map(task => task._id === id ? {...task, title} : task)
    case actionTypes.editCompletionStatus:
      const {taskId, isCompleted} = action
      return state.map(task => task._id === taskId ? {...task, isCompleted} : task)
    default:
      return state;
  }
};

const userIdReducer = (state= '', action) => {
  switch (action.type) {
    case actionTypes.updateId:
      return `${action.payload}`
    default:
      return state
  }
}

const reducers = combineReducers({
  taskReducer,
  userIdReducer,
});

export default reducers;
