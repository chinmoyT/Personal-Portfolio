import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import {GrMail} from 'react-icons/gr'
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Myself</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              Hey Everyone! My name is <span className="purple">Chinmoy Thakuria.</span> I am
              from <span className="purple"> Assam, India.</span>
              <br />I am pursuing Engineering in<span className="purple"> Computer Science</span> from 
              <span className="purple"> Vellore Institute of Technology, Amravati</span>
              <br />
              <br />
              Some of my hobbies are: 
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Video Editing
              </li>
              <li className="about-activity">
                <ImPointRight /> Watching movies
              </li>
            </ul>
            </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="myAvatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chinmoy12345678"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chinmoy-thakuria/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chinmoythakuria20@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GrMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+916000435728"
                  style={{ color: "#222" }}
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
