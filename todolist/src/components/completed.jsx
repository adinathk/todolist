import React, { Component } from "react";
class Completed extends Component {
  state = {};
  render() {
    return (
      <div
        className="border"
        style={{
          width: 400,
          borderRadius: 5,
          backgroundColor: "rgba(0,200,0,0.5)",
        }}
      >
        <div
          style={{
            width: 200,
            display: "inline-block",
            wordBreak: "break-all",
          }}
        >
          <span className=" p-1 ">{this.props.content}</span>
        </div>

        <button
          className="btn btn-sm btn-danger m-1"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          delete
        </button>
      </div>
    );
  }
}

export default Completed;
