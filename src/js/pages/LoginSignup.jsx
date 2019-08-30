import React, { Component } from "react";

import styles from "./LoginSignUp.module.scss";
import Header from "../components/Header";
import LoginAndSignUp from "../components/LoginAndSignUp";
import Footer from "../components/Footer";
class LoginSignup extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header className="sticky-top" />
        <div className={styles.main}>
          <LoginAndSignUp />
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginSignup;
