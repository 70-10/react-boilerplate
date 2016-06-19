import React, { Component } from "react";
import style from "./style.css";

export default class Countrer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section className="hero is-dark is-bold is-fullheight">
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a href="/" className="nav-item">
                    <h2 className="subtitle">React Boilerplate</h2>
                  </a>
                </div>
              </div>
            </header>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">{this.props.count}</h1>
              <div className="columns">
                <div className="column is-one-third">
                  <button className="button" onClick={() => this.props.dispatch("increment", 1)}>+1</button>
                </div>
                <div className="column">
                  <button className="button" onClick={() => this.props.dispatch("decrement", 1)}>-1</button>
                </div>
                <div className="column">
                  <button className="button" onClick={() => this.props.dispatch("increment", 100)}>+100</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
