import React from "react";
import Card from "react-bootstrap/Card";
import "../Cardportf.css";

const CardPortf = () => {
  return (
    <Card className="cardcss" style={{ background: "grey" }}>
      <Card.Body>
        <Card.Text>TEST TEST</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPortf;
