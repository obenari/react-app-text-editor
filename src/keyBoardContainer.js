import React, { Component } from "react";
import Keyboard1 from "./keyboard1";
import WhiteBoard from "./whiteBoard";

class KeyBoardContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
  }

  handleKeyPress(newText) {
    if (newText === "Backspace") {
      this.setState({ text: this.state.text.slice(0, -1) });
    } else {
      this.setState({ text: this.state.text + newText });
    }
  }
  handleEmojiClick(newEmoji) {
    this.setState({ text: this.state.text + newEmoji });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <WhiteBoard text={this.state.text} />
        <Keyboard1
          onPress={this.handleKeyPress}
          onEmojiClick={this.handleEmojiClick}
        />
      </div>
    );
  }
}

export default KeyBoardContainer;
