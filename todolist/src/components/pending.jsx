import React, { Component } from "react";
class Pending extends Component {
  state = {};
  render() {
    return (
      <div className="border" style={{ width: 400, borderRadius: 5 }}>
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
          className="btn btn-sm btn-success m-1"
          onClick={() => this.props.onDone(this.props.id)}
        >
          done
        </button>
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

export default Pending;
