import uuid from "uuid/v4";

export const addTodoItemAction = (taskname, deadline) => {
  return (dispatch, getState) => {
    try {
      let state = getState();
      let newTodoItem = {
        id: uuid(),
        todo: taskname,
        isCompleted: false,
        completedAt: null,
        createdAt: new Date().toISOString(),
        deadline
      };
      let copy = state.todo.list.slice();
      copy.push(newTodoItem);
      dispatch({
        type: "ADD_TODO_ITEM",
        payload: copy
      });
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
};

export const deleteTodoItemAction = (id) => {
  return (dispatch, getState) => {
    try {
      const state = getState();
      let listCopy = state.todo.list.slice();
      let itemIndex = listCopy.findIndex(Items => Items.id === id);

      listCopy.splice(itemIndex, 1);
      dispatch({
        type: "DELETE_TODO_ITEM",
        payload: listCopy
      });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};
