import React, { Component } from "react";

import Button from "./../Forms/Button/index";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import AuthWrapper from "../AuthWrapper";

import FormInput from "../Forms/FormInput";

import "./styles.scss";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.this.setState({
        ...initialState,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;

    const configAuthWrapper = {
      headline: 'LogIn'
    }

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />

            <Button type="submit"> Log In</Button>

            <div className="socialSignIn">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
              </div>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default SignIn;
