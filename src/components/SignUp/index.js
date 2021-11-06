import React, { useState } from "react";
import { withRouter } from "react-router";

import { auth, handleUserProfile } from "./../../firebase/utils";
import AuthWrapper from "../AuthWrapper/index";

import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button/";

import "./styles.scss";

const SignUp = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Password Doesn't match"];
      setErrors(err);
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { displayName });
      resetForm();
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
      )}

      <div className="formWrap">
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            handleChange={(event) => setDisplayName(event.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(event) => setEmail(event.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(event) => setPassword(event.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignUp);
