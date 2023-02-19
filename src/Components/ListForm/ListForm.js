import React, { Component } from "react";

export default class ListForm extends Component {
  state = {
    name: "",
    age: "",
    goal: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitGoal = (e) => {
    e.preventDefault();
    if (e.target.name.value !== "") {
      this.props.addGoal(this.state);
      this.setState({
        name: "",
        age: "",
        goal: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitGoal}>
          <input
            type="text"
            placeholder="Enter name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="Enter goal"
            id="goal"
            onChange={this.handleChange}
            value={this.state.goal}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
