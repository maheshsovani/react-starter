import {Button, Form, Navbar} from "react-bootstrap";
import React from "react";
import styles from "./PostQuestionPopup.module.scss";

class PostQuestionPopup extends React.Component {
  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popupInner}>

          <Form>
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

          </Form>
          <Button  variant="primary" size="lg" onClick={this.props.closePopup}>
            Post Question
          </Button>
        </div>
      </div>
    );
  }
}

export default PostQuestionPopup;
