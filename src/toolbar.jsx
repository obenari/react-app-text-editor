import React, { Component } from "react";

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: "16px",
      color: "#000000",
      bold: false,
      fontWeight: "unbold",
      fontStyle: "unitalic",
      italic: false,
    };
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBoldClick = this.handleBoldClick.bind(this);
    this.handleItalicClick = this.handleItalicClick.bind(this);
    // this.styles = {
    //   fontSize: "16px",
    //   color: "#000000",
    //   bold: false,
    //   italic: false,
    // };
  }

  handleFontSizeChange(e) {
    //this.setState({ fontSize: e.target.value });
    //this.state.fontSize = e.target.value;
    //this.props.onPress(this.state.fontSize);
    //this.styles.fontSize = e.target.value;
    let styles = { ...this.state };
    styles.fontSize = e.target.value;
    this.props.onPress(styles);
    this.setState({ fontSize: e.target.value });
  }

  handleColorChange(e) {
    // this.setState({ color: e.target.value });
    // //this.props.onPress(this.state.color);

    let styles = { ...this.state };
    styles.color = e.target.value;
    this.props.onPress(styles);
    this.setState({ color: e.target.value });
  }

  handleBoldClick() {
    let styles = { ...this.state };
    styles.fontWeight = this.state.fontWeight === "bold" ? "normal" : "bold";
    this.props.onPress(styles);
    this.setState({ fontWeight: styles.fontWeight, bold: !this.state.bold });
  }

  handleItalicClick() {
    let styles = { ...this.state };
    styles.fontStyle = this.state.fontStyle === "italic" ? "normal" : "italic";
    this.props.onPress(styles);
    this.setState({ fontStyle: styles.fontStyle, italic: !this.state.italic });
  }
  render() {
    const { fontSize, color, bold, italic } = this.state;
    let style1 = { borderRadius: "10px", padding: "10px " };
    let style2 = {
      borderRadius: "10px",
      border: "2px solid black",
      height: "auto",
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          rowGap: "10%",
        }}
      >
        <button style={style1} onClick={this.handleBoldClick}>
          {bold ? "Unbold" : "Bold"}
        </button>
        <button onClick={this.handleItalicClick} style={style1}>
          {italic ? "Unitalicize" : "Italicize"}
        </button>
        <select
          value={fontSize}
          onChange={this.handleFontSizeChange}
          style={style2}
        >
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="20px">20</option>
        </select>
        <input
          type="color"
          value={color}
          onChange={this.handleColorChange}
          style={style2}
        />
        <button style={style1} onClick={() => this.props.onCleanText()}>
          clean text{" "}
        </button>
      </div>
    );
  }
}

export default Toolbar;
