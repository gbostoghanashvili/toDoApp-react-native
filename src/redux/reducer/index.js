import {actionTypes} from "../action";
import { combineReducers } from 'redux';

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.add:
      return [action.payload, ...state];
    case actionTypes.remove:
      return state.filter(task => task.id !== action.payload);
    case actionTypes.edit:
      const {id, title, isCompleted} = action.payload
      return state.map(task => task.id === id ? {...task, title, isCompleted} : task)
    default:
      return state;
  }
};

const reducers = combineReducers({
  taskReducer,
});

export default reducers;
