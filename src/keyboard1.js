import React, { Component } from "react";

class Keybord1 extends Component {
  constructor() {
    super();
    this.state.selectedKey = "";
    this.englishLayout = {
      rows: [
        [
          "`",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "-",
          "=",
          "Backspace",
        ],
        [
          "Tab",
          "q",
          "w",
          "e",
          "r",
          "t",
          "y",
          "u",
          "i",
          "o",
          "p",
          "[",
          "]",
          "\\",
        ],
        [
          "CapsLock",
          "a",
          "s",
          "d",
          "f",
          "g",
          "h",
          "j",
          "k",
          "l",
          ";",
          "'",
          "Enter",
        ],
        ["shiftl", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shiftr"],
        ["hebrew", ".com", "@", "Space"],
      ],
    };
  }
  handleKeyClick(key){
    this.setState({selectedKey:key});
  }
  render() {
    return (
      <div>
        <div>Selected key: {this.state.selectedKey}</div>
        <div>
          {this.englishLayout.map((row) =>
            row.map((key) => (
              <button key={key} onClick={() => this.handleKeyClick(key)}>
                {key}
              </button>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Keybord1;
