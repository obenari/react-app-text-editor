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

  splitByStyle() {
    let splitedText = [];
    const text = this.props.text;
    const styleList = this.props.newStyle;
    for (let i = 0; i < styleList.length - 1; i++) {
      let txt = text.slice(
        styleList[i].startIndex,
        styleList[i + 1].startIndex
      );
      splitedText.push(txt);
    }
    if (styleList.length === 1) {
      splitedText.push(text);
    } else {
      let len = styleList.length;
      let txt = text.slice(styleList[len - 1].startIndex);
      splitedText.push(txt);
    }

    return (
      <div>
        {splitedText.map((substring, index) => (
          <span key={index} style={styleList[index]}>
            {substring}
          </span>
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
        {this.splitByStyle()}
      </div>
    );
  }
}

export default WhiteBoard;
