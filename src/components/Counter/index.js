import React, { Component } from "react";
// import style from "./style.css";

export default class Countrer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/*<div className={style.normal}>{this.props.count}</div>*/}
        <div className="normal">{this.props.count}</div>
        <button onClick={() => this.props.dispatch("increment", 1)}>+1</button>
        <button onClick={() => this.props.dispatch("decrement", 1)}>-1</button>
        <button onClick={() => this.props.dispatch("increment", 100)}>+100</button>
      </div>
    );
  }
}
