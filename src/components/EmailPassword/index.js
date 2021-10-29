import React, { Component } from 'react';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

import { auth } from '../../firebase/utils';

import './styles.scss';

const initialState = {
  email: '',
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;
      const config = {
          url: 'http://localhost:3000/login'
      }

      await auth.sendPasswordResetEmail(email, config)
      .then(() => {
        console.log('password Reset')
      })
      .catch(() => {
        console.log('Something went wrong')
      })

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email } = this.state;

    const configAuthWrapper = {
      headline: 'Email Password',
    };

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
          </form>
        </div>
        <Button type="submit">Email Password</Button>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
