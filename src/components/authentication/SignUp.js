import React from "react";
import styles from "./Authentication.module.css";

const SignUp = ({
  handleSignup,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  signupUsername,
  setSignupUsername,
  signupPassword,
  setSignupPassword,
}) => {
  return (
    <>
      <h2>Sign-Up!</h2>
      <form className={styles.formStyle} onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.inputStyle}
        />
        <input
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={(e) => setSignupUsername(e.target.value)}
          className={styles.inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          className={styles.inputStyle}
        />
        <button type="submit" className={styles.buttonStyle}>
          Signup
        </button>
      </form>
    </>
  );
};

export default SignUp;
