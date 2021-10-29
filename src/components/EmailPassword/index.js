import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

import { auth } from '../../firebase/utils';

import './styles.scss';

const initialState = {
  email: '',
  error: [],
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
        url: 'http://localhost:3000/login',
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found. Please try again. :-('];
          this.setState({
            error: err,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, error } = this.state;

    const configAuthWrapper = {
      headline: 'Email Password',
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">

            {error.length > 0 && (
                <ul>
                    {error.map((err, index) => {
                        return (
                            <li key={index}>{err}</li>
                        )
                    })}
                </ul>
            )}

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
