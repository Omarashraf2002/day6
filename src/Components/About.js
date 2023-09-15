import React from "react";
import "../CSS/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <Container className="container">
      <Row>
        <Col className="AboutUS">ABOUT ME</Col>
        <Col className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Col>
      </Row>
      <Button variant="dark p-2 " className="butt">
        DOWNLOAD RESUME!
      </Button>
    </Container>
  );
}

export default About;
