import React from "react";
import Todoform from "./Todoform";
import uuid from "uuid/v4";
import Todolist from "./Todolist";

class Todobody extends React.Component {
  // state = {
  //   todoList: []
  // };

  // addtodoItem = (taskname, deadline) => {
  //   let listCopy = this.state.todoList.slice();
  //   listCopy.push({
  //     id: uuid(),
  //     todo: taskname,
  //     createdAt: new Date().toISOString(),
  //     isCompleted: false,
  //     completedAt: null,
  //     deadline: deadline
  //   });
  //   this.setState({
  //     todoList: listCopy
  //   });
  //   // document.getElementById("Todoform").reset();
  // };

  render() {
    return (
      <React.Fragment>
        <Todoform />
        <Todolist />
      </React.Fragment>
    );
  }
}

export default Todobody;
