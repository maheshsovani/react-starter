import React, {useState} from "react";
import {Button, Form, Tab, Tabs} from "react-bootstrap";
import styles from "./LoginAndSignUp.module.scss";
import {loginErrors, signUpErrors} from "../constants"

function LoginAndSignUp() {
  const [activeItem, setActiveItem] = useState("login");
  const [isLoaded, setIsLoaded] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  function toggle(key) {
    setActiveItem(key);
  }

  function makeSignupApi(userData) {
    fetch("/api/user/signup", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {"Content-Type": "application/json"}
    }).then(res => {
      return res.json()
    }).then(
      result => {
        if (result.status) {
          setActiveItem("login");
        } else {
          setSignupError(signUpErrors.EMAIL_ALREADY_REGISTERED);
        }
      },
      error => {
      }
    );
  }

  function handleSignup(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const params = ["email", "username", "password", "confirmPassword"];
    let userData = {};
    params.forEach(param => {
      userData[param] = data.get(param);
    });
    if (userData.password !== userData.confirmPassword) {
      setSignupError(signUpErrors.PASSWORD_NOT_MATCHED);
    } else {
      makeSignupApi(userData)
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const params = ["username", "password"];
    let userData = {};
    params.forEach(param => {
      userData[param] = data.get(param);
    });

    fetch("/api/user/login", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {"Content-Type": "application/json"}
    }).then(res => {
      console.log(res.status);
      return res.json()
    }).then(
      result => {
        console.log(result);
        if (result.status) {
          window.location.href = "/home";
        } else {
          setLoginError(loginErrors.USER_NOT_FOUND)
        }
      },
      error => {
      }
    );
  }

  return (
    <div className={styles.formBox}>
      <Tabs
        activeKey={activeItem}
        onSelect={key => toggle(key)}
      >
        <Tab eventKey="login" title="Login">
          <Form onSubmit={event => handleLogin(event)}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                size="lg"
                placeholder="yourusername"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                size="lg"
                placeholder="********"
              />
            </Form.Group>
            <br/>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className={styles.submitBtn}
              block
            >
              Submit
            </Button>
            {loginError ? <p className={styles.error}>{loginError}</p> : ""}
          </Form>
        </Tab>
        <Tab eventKey="signUp" title="Sign Up">
          <Form onSubmit={event => handleSignup(event)}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                id="email"
                type="email"
                size="lg"
                placeholder="e.g. name@something.com"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                id="username"
                size="lg"
                placeholder="yourusername"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                id="password"
                type="password"
                size="lg"
                placeholder="********"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                size="lg"
                placeholder="********"
                required
              />
            </Form.Group>
            <br/>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className={styles.submitBtn}
              block
            >
              Submit
            </Button>
            {signupError ? <p className={styles.error}>{signupError}</p> : ""}
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}

export default LoginAndSignUp;
