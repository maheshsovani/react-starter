import React from "react";
import styles from "./NavigationBar.module.scss";
import { Button, Form, FormControl, InputGroup, Navbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

class NavigationBar extends React.Component {
  showPopup(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Navbar bg="light" expand="lg" className={styles.navFlex}>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <Button size="lg" variant="primary" className={styles.sortLabel}>
            Sort By:{" "}
          </Button>
          <ToggleButton value={1} size="lg">
            {" "}
            Relevance
              </ToggleButton>
          <ToggleButton value={2} size="lg">
            Date: Newest
              </ToggleButton>
          <ToggleButton value={3} size="lg">
            Date: Oldest
              </ToggleButton>
        </ToggleButtonGroup>

        <Form>
          <InputGroup size="lg" className={styles.searchBox}>
            <FormControl
              placeholder="Search..."
              aria-label="Search..."
              size="lg"
            />
            <InputGroup.Append>
              <Button variant="outline-primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <Button variant="primary" size="lg" onClick={event => this.showPopup(event)}>
          Post Question
        </Button>
      </Navbar>
    );
  }
}
export default NavigationBar;