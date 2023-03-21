import React, { Component } from "react";

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: "16px",
      color: "#000000",
      bold: false,
      italic: false,
    };
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBoldClick = this.handleBoldClick.bind(this);
    this.handleItalicClick = this.handleItalicClick.bind(this);
  }

  handleFontSizeChange(e) {
    this.setState({ fontSize: e.target.value });
    this.props.onPress(this.state.fontSize);
  }

  handleColorChange(e) {
    this.setState({ color: e.target.value });
    this.props.onPress(this.state.color);
  }

  handleBoldClick() {
    this.setState((prevState) => ({ bold: !prevState.bold }));
    this.props.onPress(this.state.bold);
  }

  handleItalicClick() {
    this.setState((prevState) => ({ italic: !prevState.italic }));
    this.props.onPress(this.state.italic);
  }
  render() {
    const { fontSize, color, bold, italic } = this.state;
    return (
      <div>
        <button onClick={this.handleBoldClick}>
          {bold ? "Unbold" : "Bold"}
        </button>
        <button onClick={this.handleItalicClick}>
          {italic ? "Unitalicize" : "Italicize"}
        </button>
        <select value={fontSize} onChange={this.handleFontSizeChange}>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="20px">20</option>
        </select>
        <input type="color" value={color} onChange={this.handleColorChange} />
      </div>
    );
  }
}

export default Toolbar;
