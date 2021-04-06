export const actionTypes = {
  add: 'add',
  remove: 'remove',
  editTitle: 'editTitle',
  editCompletionStatus: 'editCompletion',
  showCompleted: 'showCompleted'
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

export const editTaskTitle = (id, title) => {
  return {
    type: actionTypes.editTitle,
    id,
    title
  };
};

export const editTaskCompletionStatus = (id, isCompleted) => {
  return {
    type: actionTypes.editCompletionStatus,
    taskId: id,
    isCompleted
  };
};
