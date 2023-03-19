import React, { Component } from "react";

class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  spliteText() {
    const myStringArray = this.props.text.split("\n");
    return (
      <div>
        {myStringArray.map((substring, index) => (
          <div key={index}>{substring}</div>
        ))}
      </div>
    );
  }

  render() {
    let styles = {
      marginLeft: "3%",
      marginRight: "3%",
      height: "60%",
      width: "94%",
      whiteSpace: "pre-wrap",
    };
    return (
      <div style={styles} className="whiteBoard">
        {this.spliteText()}
      </div>
    );
  }
}

export default WhiteBoard;
