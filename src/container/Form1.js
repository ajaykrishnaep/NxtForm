import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default class form1 extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log("Submited", this.state);
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.value}
          task={this.handleChange}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.value}
          task={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.value}
          task={this.handleChange}
        />

        <Button buttonAction={this.handleSubmit} name={"Submit"} />
      </div>
    );
  }
}
