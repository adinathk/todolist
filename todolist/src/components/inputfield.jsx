import React, { Component } from "react";
class Inputfield extends Component {
  render() {
    return (
      <div className="my-3">
        <input type="text" name="inputfield" id="inputfield" />
        <button
          type="submit"
          onClick={() => {
            this.props.onAdd(document.getElementById("inputfield").value);
            document.getElementById("inputfield").value = "";
          }}
        >
          +
        </button>
      </div>
    );
  }
  inputval = () => {
    return document.getElementById("inputfield").value;
  };
}

export default Inputfield;
