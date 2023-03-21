import React, { Component } from "react";
import Keyboard1 from "./keyboard1";
import WhiteBoard from "./whiteBoard";
import Toolbar from "./toolbar";

class KeyBoardContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      style: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleStylePress = this.handleStylePress.bind(this);
  }
  handleKeyPress(newText) {
    if (newText === "Backspace" || newText === "Bcksp") {
      if (this.state.text.charCodeAt(this.state.text.length - 1) > 255) {
        //check whether the last chracter is emoji
        this.setState({ text: this.state.text.slice(0, -2) });
      } else {
        this.setState({ text: this.state.text.slice(0, -1) });
      }
    } else {
      this.setState({ text: this.state.text + newText });
    }
  }
  handleStylePress(newStyle) {
    this.setState({ style: newStyle });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <WhiteBoard text={this.state.text} newStyle={this.state.style} />
        <Toolbar onPress={this.handleStylePress} />
        <Keyboard1
          onPress={this.handleKeyPress}
          onEmojiClick={this.handleEmojiClick}
        />
      </div>
    );
  }
}

export default KeyBoardContainer;
