import React from "react";
import Todoitem from "./Todoitem";
import { connect } from "react-redux";

class Todolist extends React.Component {
  render() {
    console.log(this.props);
    return this.props.list.map(Items => <Todoitem key={Items.id} {...Items} />);
  }
}

const mapStateToProps = state => ({
  list: state.todo.list
});

export default connect(mapStateToProps)(Todolist);
