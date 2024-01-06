import React, { useState } from "react";
import ImageUploader from "../imageUpload/ImageUploader";
import styles from "./Authentication.module.css";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Authentication = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (username === "demo" && password === "demo123") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup
    const usernameRegex = /^[a-zA-Z0-9]+$/; // Regex to allow only alphanumeric characters
    if (
      signupUsername &&
      signupPassword &&
      usernameRegex.test(signupUsername) &&
      firstName &&
      lastName
    ) {
      setUsername(signupUsername); // Auto-login after signup
      setPassword(signupPassword);
      setLoggedIn(true);
      setError("");
    } else {
      setError(
        "Please provide valid username, password, first name, and last name for signup"
      );
    }
  };

  const handleShowSignUp = () => {
    setShowSignUp(true);
    setError("");
  };

  return !loggedIn ? (
    <div className={styles.authStyle}>
      {!showSignUp ? (
        <div>
          <LogIn
            handleLogin={handleLogin}
            setUsername={setUsername}
            username={username}
            password={password}
            setPassword={setPassword}
            handleShowSignUp={handleShowSignUp}
          />
        </div>
      ) : (
        <SignUp
          handleSignup={handleSignup}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          signupUsername={signupUsername}
          setSignupUsername={setSignupUsername}
          signupPassword={signupPassword}
          setSignupPassword={setSignupPassword}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  ) : (
    <ImageUploader />
  );
};

export default Authentication;
