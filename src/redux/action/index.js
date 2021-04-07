export const actionTypes = {
  add: 'add',
  remove: 'remove',
  editTitle: 'editTitle',
  editCompletionStatus: 'editCompletion',
  showCompleted: 'showCompleted',
  setTasks: 'setTasks',

  updateId: 'updateId',
}

export const addTask = task => {
  return {
    type: actionTypes.add,
    payload: task
  };
};

export const setTasks = tasks => {
  return {
    type: actionTypes.setTasks,
    payload: tasks
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

export const updateUserId = id => {
  return {
    type: actionTypes.updateId,
    payload: id
  };
};
