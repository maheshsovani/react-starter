import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.scss";
import NavigationBar from "../components/NavigationBar";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Header className="sticky-top"/>
        <section className="navigationContainer">
          <NavigationBar/>
        </section>
        <div className={styles.main}>
          Main content
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
