import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.scss";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Navbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
class Home extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Header className="sticky-top" />
        <section className="navigationContainer">
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
            <Button variant="primary" size="lg">
              Post Question
            </Button>
          </Navbar>
        </section>
        <div className={styles.main}></div>
        <Footer />
      </div>
    );
  }
}
export default Home;
