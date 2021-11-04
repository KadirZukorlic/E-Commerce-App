import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button";

import { auth } from "../../firebase/utils";

import "./styles.scss";

const EmailPassword = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found. Please try again. :-("];
          setError(err)
        });
    } catch (error) {
      console.log(error);
    }
  };

    const configAuthWrapper = {
      headline: "Email Password",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {error.length > 0 && (
            <ul>
              {error.map((err, index) => {
                return (
                  <li key={index} style={{ color: "red" }}>
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
  }


export default withRouter(EmailPassword);
