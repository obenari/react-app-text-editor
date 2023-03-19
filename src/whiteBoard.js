import React, { Component } from "react";

class WhiteBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = {
      marginLeft: "3%",
      marginRight: "3%",
      height: "60%",
      width: "94%",
    };
    return (
      <div style={styles} className="whiteBoard">
        {this.props.text}
      </div>
    );
  }
}

export default WhiteBoard;
