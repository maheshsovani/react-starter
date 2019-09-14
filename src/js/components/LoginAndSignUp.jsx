import React, { Component } from "react";
import { Tab, Tabs, Button, Form } from "react-bootstrap";
import styles from "./LoginAndSignUp.module.scss";
import { Redirect } from "react-router-dom";
import { signUpErrors } from "../constants"

class LoginAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "login",
      isLoaded: false,
      error: ""
    };
  }

  toggle(key) {
    this.setState({ activeItem: key });
  }

  handleSignup(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    let userData = {};
    userData.email = data.get("email");
    userData.username = data.get("username");
    userData.password = data.get("password");
    userData.confirmPassword = data.get("confirmPassword");

    if (userData.password !== userData.confirmPassword) {
      this.setState({ error: signUpErrors.PASSWORD_NOT_MATCHED });
    }

    fetch("/api/signup", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(
        result => {
          console.log(result);
        },
        error => {
        }
      );
  }

  handleLogin(event) { }
  render() {
    return (
      <div className={styles.formBox}>
        <Tabs
          activeKey={this.state.activeItem}
          onSelect={key => this.toggle(key)}
        >
          <Tab eventKey="login" title="Login">
            <Form onSubmit={event => this.handleLogin(event)}>
              <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  size="lg"
                  placeholder="yourusername"
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  size="lg"
                  placeholder="********"
                />
              </Form.Group>
              <br />
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className={styles.submitBtn}
                block
              >
                Submit
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="signUp" title="Sign Up">
            <Form onSubmit={event => this.handleSignup(event)}>
              <Form.Group >
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
              <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  id="username"
                  size="lg"
                  placeholder="yourusername"
                  required
                />
              </Form.Group>
              <Form.Group >
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
              <Form.Group >
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
              <br />
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className={styles.submitBtn}
                block
              >
                Submit
              </Button>
              {this.state.error ? <p>here is error</p> : ""}
            </Form>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default LoginAndSignUp;
