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
      changeTheWholeText: false,
    };
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBoldClick = this.handleBoldClick.bind(this);
    this.handleItalicClick = this.handleItalicClick.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    // this.styles = {
    //   fontSize: "16px",
    //   color: "#000000",
    //   bold: false,
    //   italic: false,
    // };
  }

  handleFontSizeChange(e) {
    let newValue = e.target.value;
    if (this.state.changeTheWholeText) {
      this.props.onChangeTheWholeText("fontSize", newValue);
    } else {
      let styles = { ...this.state };
      styles.fontSize = newValue;
      this.props.onPress(styles);
    }
    this.setState({ fontSize: newValue });
  }

  handleColorChange(e) {
    let newValue = e.target.value;
    if (this.state.changeTheWholeText) {
      this.props.onChangeTheWholeText("color", newValue);
    } else {
      let styles = { ...this.state };
      styles.color = newValue;
      this.props.onPress(styles);
    }
    this.setState({ color: newValue });
  }

  handleBoldClick() {
    let newValue = this.state.fontWeight === "bold" ? "normal" : "bold";
    if (this.state.changeTheWholeText) {
      this.props.onChangeTheWholeText("fontWeight", newValue);
    } else {
      let styles = { ...this.state };
      styles.fontWeight = newValue;
      this.props.onPress(styles);
    }
    this.setState({ fontWeight: newValue, bold: !this.state.bold });
  }

  handleItalicClick() {
    let newValue = this.state.fontStyle === "italic" ? "normal" : "italic";
    if (this.state.changeTheWholeText) {
      this.props.onChangeTheWholeText("fontStyle", newValue);
    } else {
      let styles = { ...this.state };
      styles.fontStyle = newValue;
      this.props.onPress(styles);
    }
    this.setState({ fontStyle: newValue, italic: !this.state.italic });
  }

  handleChangeCheckbox() {
    this.setState({ changeTheWholeText: !this.state.changeTheWholeText });
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
          clean text
        </button>
        <label className="switch" style={{ textAlign: "right" }}>
          <input
            type="checkbox"
            onChange={() => this.handleChangeCheckbox()}
            style={{ accentColor: "#1ea79a" }}
          />
          <span>
            change style {<br />}
            {"\t"}the whole text
          </span>
        </label>
      </div>
    );
  }
}

export default Toolbar;
