import React from "react";
import styles from "./Question.module.scss";
import {Badge} from "react-bootstrap";

function Question(props) {
  const {title, tags, views, answers, postedBy, date} = props.question;
  return (
    <div className={styles.question}>
      <div className={styles.questionTitleAndTags}>
        <div className={styles.questionTitle}>
          <a href={""}>{title}</a>
        </div>
        <div className={styles.questionTags}>
          {
            tags.map(tag => <Badge variant="info" className={styles.tag}>{tag}</Badge>)
          }
        </div>
      </div>
      <div className={styles.questionInformation}>
        <div className={styles.questionViewAndAnswerCount}>
          views :{views}, answers:{answers}
          {/*<div className={styles.views}>{views}</div>*/}
          {/*<div className={styles.answers}>{answers}</div>*/}
        </div>
        <div className={styles.questionPostDetails}>
          Asked By:{postedBy} On date {date}
        </div>
      </div>
    </div>
  )
}

export default Question;