export const actionTypes = {
  add: 'add',
  remove: 'remove',
  edit: 'edit',
}

export const addTask = task => {
  return {
    type: actionTypes.add,
    payload: task
  };
};

export const removeTask = id => {
  return {
    type: actionTypes.remove,
    payload: id
  };
};

export const editTask = task => {
  return {
    type: actionTypes.edit,
    payload: task
  };
};
