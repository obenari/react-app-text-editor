import React, { Component } from "react";

class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      styles: {
        fontSize: "16px",
        color: "#000000",
        fontStyle: "unitalic",
        fontWeight: "unbold",
        textDecorationLine: "ununderline",
      },
    };
  }

  spliteText() {
    const myStringArray = this.props.text.split("\n");
    return (
      <div>
        {myStringArray.map((substring, index) => (
          <div key={index} style={this.props.newStyle}>
            {substring}
          </div>
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
    let newStyle = this.props.newStyle;
    // newStyle = JSON.parse(newStyle);
    // newStyle["marginLeft"] = "3%";
    // newStyle["marginRight"] = "3%";
    // newStyle["height"] = "60%";
    // newStyle["width"] = "94%";
    // newStyle["whiteSpace"] = "pre-wrap";
    return (
      <div style={styles} className="whiteBoard">
        {this.spliteText()}
      </div>
    );
  }
}

export default WhiteBoard;
