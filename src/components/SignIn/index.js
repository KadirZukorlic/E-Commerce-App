import React from 'react';

import Button from './../Forms/Button/index';

import './styles.scss';

const SignIn = () => {
  return (
    <div className="signin">
      <div className="wrap">
        <h2>LogIn</h2>
        <div className="formWrap">
          <form>
            <div className="socialSignIn">
              <div className="row">
                <Button>Sign in with Google
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
