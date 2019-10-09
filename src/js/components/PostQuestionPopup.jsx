import {Button, Form} from "react-bootstrap";
import React from "react";
import styles from "./PostQuestionPopup.module.scss";

function PostQuestionPopup(props) {
  function handlePostQuestion(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let question = {};
    question["title"] = data.get("title");
    question["description"] = data.get("description");
    question["tags"] = data.get("tags").split(/[, ;]+/);

    fetch("/api/addQuestion", {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {"Content-Type": "application/json"}
    }).then(r => console.log(r.json()))
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popupContentWrapper}>
        <div className={styles.closePopupBtn}>
          <span aria-hidden="true" onClick={props.closePopup}>&times;</span>
        </div>
        <div className={styles.popupInner}>
          <Form onSubmit={event => handlePostQuestion(event)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                size="lg"
                placeholder="What is your question?"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="decription"
                as="textarea"
                rows="3"
                size="lg"
                placeholder="Describe your question in details"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <Form.Control
                name="tags"
                size="lg"
                placeholder="Add realated Tags. Only ; seperated values. Space not allowed"
              />
            </Form.Group>
            <Button variant="primary" size="lg" block>
              Post Question
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
}

export default PostQuestionPopup;
