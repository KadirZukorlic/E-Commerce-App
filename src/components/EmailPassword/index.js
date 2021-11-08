import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { resetPassword, resetAllAuthForms } from '../../redux/User/user-actions';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

import './styles.scss';

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordError: user.resetPasswordError,
});

const EmailPassword = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);

  const dispatch = useDispatch();
  const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetAllAuthForms())
      props.history.push('/login')
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setError(resetPasswordError);
    }
  }, [resetPasswordError]);

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
                <li key={index} style={{ color: 'red' }}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
