import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/Projects/crypto.png";
import portfolio from "../../Assets/Projects/portfolio1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This is my portfolio website providing professional information about me and about my work. Infact you are browsing it right now!"          
              link="https://github.com/het-parekh/Porfolio-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptocurrency Analysis"
              description="An API based live crypto currency price analysis platform which shows realtime prices off crypto coins."          
              link="https://cryptoexchange-beta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
