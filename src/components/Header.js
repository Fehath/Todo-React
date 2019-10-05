import React from "react";
import Logo from "../logo.png";
import moment from "moment";

class Header extends React.Component {
  state = {
    currentTime: moment().format("MMMM Do YYYY, h:mm a")
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand" href="">
            <img
              src={Logo}
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </span>
          <small className="text-white">{this.state.currentTime}</small>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
