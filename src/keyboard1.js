import React, { Component } from "react";
import {
  englishLayout,
  englishLayoutUpperCase,
  hebrewLayout,
  keyClasses,
} from "./keyboardTypes.js";
import "./keyboard.css";

class Keybord1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: "",
      keyboardLayout: englishLayout,
    };
    this.checKey = this.checKey.bind(this);
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

      default: {
        this.props.onPress(key);
      }
    }
  }

  render() {
    return (
      <div className="keyboard">
        {this.state.keyboardLayout.map((row) => (
          <div key={row[0] + "div"} style={{ width: "100%", display: "flex" }}>
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

export default Keybord1;
