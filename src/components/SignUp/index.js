import React, { Component } from "react";

import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button/";

import "./styles.scss";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="signup">
        <div className="wrap">
          <h2>Sign Up</h2>
          <form>
            {displayName}
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="full name"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />

            <Button type="submit">
                Register
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
