import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Github from './Github';
import Aboutcard from './AboutCard';
export default function About(props) {
    let myStyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"rgb(39 54 84)":"white",
    }
  return (
    <>
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",color:"coral" }}>
            Be familiar with my<strong className="coral"> PERSONA</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Github />
      </Container>
    </Container>
    </>
  )
}
