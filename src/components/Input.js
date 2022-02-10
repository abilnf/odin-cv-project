import React, { Component } from "react";
import "../styles/Input.css";

class Input extends Component {
  state = {};
  render() {
    return (
      <div>
        <label htmlFor="">{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(e) => this.props.onChange(e.target.value)}
          value={this.props.value}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  type: "text",
  value: "",
};

export default Input;
