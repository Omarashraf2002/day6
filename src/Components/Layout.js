import React from "react";
import "../CSS/Layout.css";
import Button from "react-bootstrap/Button";

function Layout() {
  return (
    <div className="layout">
      <div className="overlay">
        <div className="Content">
          <div className="text">
            <p>
              <h1>Omar Ashraf</h1>
            </p>
            <p className="web">
              <h4>Web Developer & Designer</h4>
            </p>
            <Button variant="dark">CONTACT ME</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
