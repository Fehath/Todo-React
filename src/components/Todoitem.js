import React from "react";
import moment from "moment";

class Todoitem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ">
              <div className="card">
                <div className="card-body">
                  <div class="d-flex flex-row align-self-center">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        checked={this.props.isCompleted}
                        disabled={this.props.isCompleted}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      ></label>
                    </div>
                    <div className="todoname">
                      <small>
                        Created on {moment(this.props.createdAt).calendar()}
                      </small>
                      <h4>{this.props.todo}</h4>
                    </div>
                    <div className="deadline ml-auto p-2">
                      <small>Deadline on </small>
                      <h5>{moment(this.props.deadline).calendar()}</h5>
                    </div>
                    <div className="actions ml-auto p-2">
                      <button type="button" class="btn btn-info">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                      &nbsp;
                      <button type="button" class="btn btn-danger">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Todoitem;
