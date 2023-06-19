import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFirebase, 
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VScode">
        <SiVisualstudiocode title="VScode"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase title="Firebase"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <SiGithub title="Github"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
