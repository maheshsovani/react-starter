import React, { useState } from "react";
import styles from "./NavigationBar.module.scss";
import { Button, Form, FormControl, InputGroup, Modal, Navbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import PostQuestion from "./PostQuestion";

function NavigationBar() {
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
      <PostQuestion />
    </Navbar>
  )
}

export default NavigationBar;