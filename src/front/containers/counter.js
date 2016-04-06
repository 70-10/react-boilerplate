import React from "react";
import Container from "react-micro-container";
import Counter from "../components/Counter";

export default class CounterContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    this.subscribe({
      increment: this.increment,
      decrement: this.decrement,
    });
  }

  increment(count) {
    this.setState({count: this.state.count + count});
  }

  decrement(count) {
    this.setState({count: this.state.count - count});
  }

  render() {
    return (
      <Counter dispatch={this.dispatch} {...this.state} />
    );
  }
}
