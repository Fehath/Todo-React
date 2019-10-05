import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import { addTodoItemAction } from "../redux/actions/actionTodo";

import "react-datepicker/dist/react-datepicker.css";

class Todoform extends React.Component {
  state = {
    taskname: "",
    details: "",
    deadline: ""
  };
  componentDidMount() {
    if (this.props.id) {
      this.setState({
        taskname: this.props.taskname,
        deadLine: new Date(this.props.deadLine)
      });
    }
  }
  handleChangeTask = event => {
    this.setState({
      taskname: event.target.value
    });
  };

  handleChangeDetails = e => {
    this.setState({
      details: e.target.value
    });
  };

  handleChange = date => {
    this.setState({
      deadline: date
    });
  };

  handleSubmit = submit => {
    submit.preventDefault();
    if (this.state.taskname) {
      if (this.state.deadline) {
        let taskname = this.state.taskname;
        let deadline = this.state.deadline.toISOString();
        this.props.addtodoItem(taskname, deadline);
      } else {
        alert("Please select Deadline");
      }
    } else {
      alert("Please enter Task Name");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <br />
              <div className="card bg-dark">
                <div className="card-body">
                  <form
                    id="todoForm"
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                  >
                    <div class="form-row">
                      <div className="col-md-2">
                        <input
                          name="taskname"
                          type="text"
                          className="form-control"
                          placeholder="Enter your Task"
                          maxlength="20"
                          value={this.state.taskname}
                          onChange={this.handleChangeTask}
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          name="details"
                          type="textarea"
                          className="form-control"
                          placeholder="About Task"
                          maxlength="150"
                          value={this.state.details}
                          onChange={this.handleChangeDetails}
                          // style={{ width: "300px" }}
                        />
                      </div>
                      <div className="col-md-2">
                        <DatePicker
                          className="form-control"
                          placeholderText="Select Deadline"
                          selected={this.state.deadline}
                          onChange={this.handleChange}
                          minDate={new Date()}
                          name="deadline"
                          dateFormat=" dd MMM, yyyy"
                          width="150px"
                        />
                      </div>
                      <div className="col-md-2">
                        <select id="inputState" class="form-control">
                          <option selected>Priority</option>
                          <option>Low</option>
                          <option>Normal</option>
                          <option>High</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-success ">
                        <i className="fa fa-plus-circle"></i>
                        &nbsp;Add Task
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addtodoItem: (taskname, deadline) => addTodoItemAction(taskname, deadline)
});

export default connect(
  null,
  mapDispatchToProps
)(Todoform);
