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
  }
  handleKeyClick(key) {
    this.setState({ selectedKey: key });
  }
  render() {
    return (
      <div>
        <div className="keyboard">
          {this.state.keyboardLayout.map((row) =>
            row.map((key) => (
              <button
                key={key}
                onClick={() => this.props.onPress(key)}
                className="keyStyle"
              >
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
