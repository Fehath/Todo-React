import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer text-center">
          <p style={{ fontSize: "12px", color: "grey" }}>
            {new Date().getFullYear()} © Designed by Fehath
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
