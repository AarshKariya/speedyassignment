import React from "react";
import styles from "./Authentication.module.css";

const LogIn = ({
  handleLogin,
  setUsername,
  username,
  password,
  setPassword,
  handleShowSignUp,
}) => {
  return (
    <>
      <h2>Login!</h2>
      <form className={styles.formStyle} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputStyle}
        />
        <button type="submit" className={styles.buttonStyle}>
          Login
        </button>
        <button className={styles.signUpBtnStyle} onClick={handleShowSignUp}>
          New User? Sign-Up!
        </button>
      </form>
    </>
  );
};

export default LogIn;
