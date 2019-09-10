import React, { Component } from "react";
import { Tab, Tabs, Button, Form } from "react-bootstrap";
import styles from "./LoginAndSignUp.module.scss";
import { Redirect } from 'react-router-dom'
class LoginAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "login"
    };
  }

  toggle(key) {
    this.setState({ activeItem: key });
  }

  handleSignup(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    //TODO: make fetch call to save user data
    console.log(data.get("email"));
    console.log(data.get("username"));
    console.log(data.get("password"));
    console.log(data.get("confirmPassword"));
  }

  handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    //TODO: make fetch call to login
    console.log(data.get("username"));
    console.log(data.get("password"));

    fetch("localhost:5000/login")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className={styles.formBox}>
        <Tabs
          activeKey={this.state.activeItem}
          onSelect={key => this.toggle(key)}
        >
          <Tab eventKey="login" title="Login">
            <Form onSubmit={(event) => this.handleLogin(event)}>
              <Form.Group controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" size="lg" placeholder="yourusername" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  size="lg"
                  placeholder="********"
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" size="lg" className={styles.submitBtn} block>
                Submit
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="signUp" title="Sign Up">
            <Form onSubmit={(event) => this.handleSignup(event)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  id="email"
                  type="email"
                  size="lg"
                  placeholder="e.g. name@something.com"
                />
              </Form.Group>
              <Form.Group controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" id="username" size="lg" placeholder="yourusername" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  id="password"
                  type="password"
                  size="lg"
                  placeholder="********"
                />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  size="lg"
                  placeholder="********"
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" size="lg" className={styles.submitBtn} block>
                Submit
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div >
    );
  }
}

export default LoginAndSignUp;