import {actionTypes} from "../action";
import { combineReducers } from 'redux';

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.add:
      return [action.payload, ...state];
    case actionTypes.remove:
      return state.filter(task => task.id !== action.payload);
    case actionTypes.editTitle:
      const {id, title} = action
      return state.map(task => task.id === id ? {...task, title} : task)
    case actionTypes.editCompletionStatus:
      const {taskId, isCompleted} = action
      return state.map(task => task.id === taskId ? {...task, isCompleted} : task)

    default:
      return state;
  }
};

const reducers = combineReducers({
  taskReducer,
});

export default reducers;
