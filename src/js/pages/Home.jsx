import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.scss";
import NavigationBar from "../components/NavigationBar";
import Question from "../components/Question";

function Home() {
  let question = {
    title: "How to convert react class component to function component?",
    tags: ['react', 'redux', 'hooks', 'js'],
    views: 20,
    answers: 12,
    postedBy: 'tushartambe',
    date: "12 Jan 2019"
  };

  return (
    <div className={styles.app}>
      <Header className="sticky-top"/>
      <section className="navigationContainer">
        <NavigationBar/>
      </section>
      <div className={styles.main}>
        <Question question={question}/>
        <Question question={question}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
