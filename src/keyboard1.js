import React, { Component } from "react";
import {
  englishLayout,
  englishLayoutUpperCase,
  hebrewLayout,
} from "./keyboardTypes.js";

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
        this.props.onPress("tab");
        break;
      }
      case "Enter": {
        this.props.onPress("\n");
        break;
      }
      default: {
        this.props.onPress(key);
      }
    }
  }

  render() {
    return (
      <div>
        <div className="keyboard">
          {this.state.keyboardLayout.map((row) =>
            row.map((key) => (
              <button key={key} onClick={() => this.checKey(key)}>
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
