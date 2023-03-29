import React, { Component } from "react";
import Keyboard1 from "./keyboard1";
import WhiteBoard from "./whiteBoard";
import Toolbar from "./toolbar";
import { emojiList1 } from "./keyboardTypes";
class KeyBoardContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      style: [
        {
          fontSize: "16px",
          color: "#000000",
          fontStyle: "unitalic",
          fontWeight: "unbold",
          textDecorationLine: "ununderline",
          startIndex: 0,
        },
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleStylePress = this.handleStylePress.bind(this);
    this.handleCleanText = this.handleCleanText.bind(this);
    this.handleChangeTheWholeTextStyle =
      this.handleChangeTheWholeTextStyle.bind(this);
  }
  isEmojiText(str) {
    for (let lst of emojiList1) {
      if (lst.includes(str)) {
        return true;
      }
    }
    return false;
  }
  handleKeyPress(newText) {
    if (newText === "Backspace" || newText === "Bcksp") {
      if (this.state.text.length === 0) return;
      let styleList = [...this.state.style];
      //if (this.state.text.charCodeAt(this.state.text.length - 1) > 255) {
      if (this.isEmojiText(this.state.text.slice(this.state.text.length - 2))) {
        //check whether the last chracter is emoji
        let s = styleList[styleList.length - 1];
        if (s.startIndex > this.state.text.length - 2) {
          styleList.splice(styleList.length - 1, 1); ///remove the style i fits overflow the text
        }
        this.setState({ text: this.state.text.slice(0, -2), style: styleList });
      } else {
        let s = styleList[styleList.length - 1];
        if (s.startIndex > this.state.text.length - 1) {
          styleList.splice(styleList.length - 1, 1); ///remove the style i fits overflow the text
        }

        this.setState({ text: this.state.text.slice(0, -1), style: styleList });
      }
    } else {
      this.setState({ text: this.state.text + newText });
    }
  }
  handleStylePress(newStyle) {
    let styles = this.state.style;
    newStyle.startIndex = this.state.text.length;
    if (styles[styles.length - 1].startIndex === newStyle.startIndex) {
      //if there was more than 1 style changes in the same place
      styles.splice(styles.length - 1, 1); //
    }

    let newStyleList = [...styles];
    newStyleList.push(newStyle);
    this.setState({ style: newStyleList }); ///////////////////
  }
  handleCleanText() {
    this.setState({
      text: "",
      style: [
        {
          fontSize: "16px",
          color: "#000000",
          fontStyle: "unitalic",
          fontWeight: "unbold",
          textDecorationLine: "ununderline",
          startIndex: 0,
        },
      ],
    });
  }

  handleChangeTheWholeTextStyle(styleType, value) {
    let styles = this.state.style;
    let newStyleList = [];
    for (let i = 0; i < styles.length; i++) {
      let s = { ...styles[i] };
      s[styleType] = value;
      newStyleList.push(s);
    }
    this.setState({ style: newStyleList });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <WhiteBoard text={this.state.text} newStyle={this.state.style} />
        <Toolbar
          onPress={this.handleStylePress}
          onCleanText={this.handleCleanText}
          onChangeTheWholeText={this.handleChangeTheWholeTextStyle}
        />
        <Keyboard1
          onPress={this.handleKeyPress}
          onEmojiClick={this.handleEmojiClick}
        />
      </div>
    );
  }
}

export default KeyBoardContainer;
