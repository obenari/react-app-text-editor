import React, { Component } from "react";
import {
  englishLayout,
  englishLayoutUpperCase,
  hebrewLayout,
  emojiList,
  keyClasses,
  emojiList1,
} from "./keyboardTypes.js";
import "./keyboard.css";

class Keybord1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: "",
      keyboardLayout: englishLayout,
      flagEmoji: false,
    };
    this.checKey = this.checKey.bind(this);
    //this.onEmojiClick = this.onEmojiClick.bind(this);
  }

  checKey(key) {
    switch (key) {
      case "CapsLock": {
        if (this.state.keyboardLayout === englishLayout) {
          this.setState({ keyboardLayout: englishLayoutUpperCase });
        } else {
          this.setState({ keyboardLayout: englishLayout });
        }
        break;
      }
      case "Tab": {
        this.props.onPress("\t");
        break;
      }
      case "Enter": {
        this.props.onPress("\n");
        break;
      }
      case "hebrew": {
        this.setState({ keyboardLayout: hebrewLayout });
        break;
      }
      case "English": {
        this.setState({ keyboardLayout: englishLayout });
        break;
      }
      case "Space": {
        this.props.onPress(" ");
        break;
      }
      case "Backspace": {
        this.props.onPress(key);
        break;
      }
      case "emoji": {
        this.setState({ keyboardLayout: emojiList1, flagEmoji: true });
        /* this.setState({ flagEmoji: true });*/
        break;
      }

      default: {
        this.props.onPress(key);
      }
    }
  }
  onEmojiClick(emoji) {
    switch (emoji) {
      case "hebrew": {
        this.setState({ keyboardLayout: hebrewLayout, flagEmoji: false });
        break;
      }
      case "English": {
        this.setState({ keyboardLayout: englishLayout, flagEmoji: false });
        break;
      }
      default: {
        this.props.onPress(emoji);
      }
    }
  }

  mapKeyboard() {
    if (this.state.flagEmoji) {
      return (
        <div>
          {this.state.keyboardLayout.map((emojiRow) => (
            <div
              key={emojiRow[0] + "div"}
              style={{ width: "100%", display: "flex" }}
            >
              {emojiRow.map((emoji) => (
                <button
                  className={"emoji-btn"}
                  key={emoji}
                  onClick={() => this.onEmojiClick(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {this.state.keyboardLayout.map((row) => (
            <div
              key={row[0] + "div"}
              style={{ width: "100%", display: "flex" }}
            >
              {row.map((key) => (
                <button
                  className={keyClasses[key] + " key-btn"}
                  key={key}
                  onClick={() => this.checKey(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
  render() {
    return <div className="keyboard">{this.mapKeyboard()};</div>;
  }
}

export default Keybord1;
