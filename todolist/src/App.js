import React, { Component } from 'react';
import './components/inputfield';
import Inputfield from './components/inputfield';
import Pending from './components/pending';
import Completed from './components/completed';



class App extends Component {
  constructor() {
    super();
    this.idvalue = 1;
  }
  state = {
    items: [
      { id: 0, status: "incomplete", content: "hello there" }
    ]
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Todo List</h1>
        <Inputfield onAdd={this.handleAdd} />
        {this.pendingheading()}
        {this.state.items.filter(c => c.status === "incomplete").map(item => {
          return <Pending id={item.id} key={item.id} content={item.content} onDone={this.handledone} onDelete={this.handledelete} />;
        })}


        {this.completedheading()}
        {this.state.items.filter(c => c.status === "completed").map(item => {
          return <Completed id={item.id} key={item.id} content={item.content} onDelete={this.handledelete} />;
        })}


      </div>
    );
  }



  pendingheading = () => {
    if (this.state.items.filter(c => c.status === "incomplete").length > 0) {
      return <h3>Pending</h3>;
    }
  }

  completedheading = () => {
    if (this.state.items.filter(c => c.status === "completed").length > 0) {
      return <h3>Completed</h3>;
    }
  }

  handledelete = idin => {
    let items = [...this.state.items];
    items = items.filter(c => c.id !== idin);
    this.setState({ items: items });
  }



  handledone = idin => {
    let items = [...this.state.items];
    items = items.filter(c => {
      if (c.id === idin) {
        c.status = "completed";
      }
      return c;
    });
    this.setState({ items: items });
  }




  handleAdd = a => {
    if (a !== "") {
      let itemtoadd = { id: this.idvalue, status: "incomplete", content: a };
      let items = [...this.state.items];
      items.push(itemtoadd);
      this.idvalue++;
      this.setState({ items: items });
      console.log("items:", items);
    }
  }
}


export default App;
