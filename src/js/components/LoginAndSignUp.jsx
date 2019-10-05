import React, {Component} from "react";
import {Tab, Tabs, Button, Form} from "react-bootstrap";
import styles from "./LoginAndSignUp.module.scss";
import {Redirect} from "react-router-dom";
import {signUpErrors, loginErrors} from "../constants"

class LoginAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "login",
      isLoaded: false,
      loginError: "",
      signupError: ""

    };
  }

  toggle(key) {
    this.setState({activeItem: key});
  }

  makeSignupApi(userData) {
    fetch("/api/signup", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {"Content-Type": "application/json"}
    }).then(res => {
      return res.json()
    }).then(
      result => {
        if (result.status) {
          this.setState({activeItem: "login"});
        } else {
          this.setState({signupError: signUpErrors.EMAIL_ALREADY_REGISTERED});
        }
      },
      error => {
      }
    );
  }

  handleSignup(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const params = ["email", "username", "password", "confirmPassword"];
    let userData = {};
    params.forEach(param => {
      userData[param] = data.get(param)
    });
    if (userData.password !== userData.confirmPassword) {
      this.setState({signupError: signUpErrors.PASSWORD_NOT_MATCHED});
    } else {
      this.makeSignupApi(userData)
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const params = ["username", "password"];
    let userData = {};
    params.forEach(param => {
      userData[param] = data.get(param)
    });

    fetch("/api/login", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {"Content-Type": "application/json"}
    }).then(res => {
      return res.json()
    }).then(
      result => {
        if (result.status) {
          window.location.href = "/home";
        } else {
          this.setState({loginError: loginErrors.USER_NOT_FOUND});
        }
      },
      error => {
      }
    );


  }

  render() {
    return (
      <div className={styles.formBox}>
        <Tabs
          activeKey={this.state.activeItem}
          onSelect={key => this.toggle(key)}
        >
          <Tab eventKey="login" title="Login">
            <Form onSubmit={event => this.handleLogin(event)}>
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
              {this.state.loginError ? <p className={styles.error}>{this.state.loginError}</p> : ""}
            </Form>
          </Tab>
          <Tab eventKey="signUp" title="Sign Up">
            <Form onSubmit={event => this.handleSignup(event)}>
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
              {this.state.signupError ? <p className={styles.error}>{this.state.signupError}</p> : ""}
            </Form>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default LoginAndSignUp;
