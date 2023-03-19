import React, { Component } from "react";
import Keyboard1 from "./keyboard1";

class KeyBoardContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(newText) {
    this.setState({ text: this.state.text + newText });
  }

  render() {
    return (
      <div>
        <div>{this.state.text} </div>
        <Keyboard1 onPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default KeyBoardContainer;
