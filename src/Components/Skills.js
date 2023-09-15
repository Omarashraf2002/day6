import React from "react";
import "../CSS/Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <div className="Skill">
      <div className="mainword">
        <p>
          <h1>SKILLS</h1>
        </p>
      </div>
      <div className="txt">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="myfocus">
        <Container>
          <Row>
            <Col sm={4} className="col1">
              MY FOCUS
              <p>UI/UX Design</p>
              <p>Responsive Design</p>
              <p>Web Design</p>
              <p>Mobile app Design</p>
            </Col>

            <Col sm={8}>
              <div className="prog-holder">
                <h4>UI/UX</h4>
                <div className="prog">
                  <span className="span1" data-progress="90%"></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>WEB DEVELOPER</h4>
                <div className="prog">
                  <span className="span2" data-progress="85%"></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>DEVOPS</h4>
                <div className="prog">
                  <span className="span3" data-progress="75%"></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>PYTHON</h4>
                <div className="prog">
                  <span className="span4" data-progress="65%"></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>JAVA</h4>
                <div className="prog">
                  <span className="span5" data-progress="55%"></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>C++</h4>
                <div className="prog">
                  <span className="span6" data-progress="95%"></span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
