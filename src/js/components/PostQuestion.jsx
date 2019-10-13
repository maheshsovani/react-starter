import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

function PostQuestion(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePostQuestion(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let question = {};
    question["title"] = data.get("title");
    question["description"] = data.get("description");
    question["tags"] = data.get("tags").split(/[, ;]+/);

    fetch("/api/user/addQuestion", {
      method: 'POST',
      body: JSON.stringify(question),
      headers: { "Content-Type": "application/json" }
    }).then(r => console.log(r.json()))
  }

  return (
    <React.Fragment>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Post Question
    </Button>

      <Modal show={show} style={{ opacity: 1 }} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Form onSubmit={event => handlePostQuestion(event)}>
          <Modal.Header closeButton>
            <Modal.Title>Post Question</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
                name="description"
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
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" variant="primary" size="lg">Post Question</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default PostQuestion;