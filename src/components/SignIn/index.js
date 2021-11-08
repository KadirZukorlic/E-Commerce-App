import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signInUser, signInWithGoogle, resetAllAuthForms } from './../../redux/User/user-actions';

import Button from './../Forms/Button/index';
import AuthWrapper from '../AuthWrapper';

import FormInput from '../Forms/FormInput';

import './styles.scss';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const { signInSuccess } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(signInSuccess);

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms())
      props.history.push('/');
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(signInUser({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  }

  const configAuthWrapper = {
    headline: 'LogIn',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit">Log In</Button>

          <div className="socialSignIn">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignIn);
