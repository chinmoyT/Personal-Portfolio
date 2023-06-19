import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHackerrank,
  SiGeeksforgeeks,
  SiLeetcode
} from "react-icons/si";

function CodingWebsiteStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <a  href='https://www.hackerrank.com/chinmoy20bcn7085' target='blank_' title="Hackerrank">
            <Col  xs={4} md={4} className="tech-icons">
                <SiHackerrank style={{color:"#fff"}} title="Hackerrank"/>
            </Col>
        </a>
        {/* <a href='https://auth.geeksforgeeks.org/user/chinughy444' target='blank_' title="GeeksforGeeks">
            <Col xs={4} md={4} className="tech-icons">
                <SiGeeksforgeeks style={{color:"#fff"}} title="GeeksforGeeks"/>
            </Col>
        </a> */}
        <a href='https://leetcode.com/chinmoy201/' target='blank_' title="Leetcode">
            <Col xs={4} md={4} className="tech-icons">
                <SiLeetcode style={{color:"#fff"}} title="Leetcode"/>
            </Col>
        </a>
    </Row>
  );
}

export default CodingWebsiteStack;
