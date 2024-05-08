import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",color:"black" }}>
            Hi Everyone, I am <span className="coral">Parves </span>
            from <span className="coral"> Chittagong, Bangladesh</span>
            <br />
            I am currently a CS Student.
            <br />
            At Port City International University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{color:"black"}}>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new Techs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "black" }}>
          "The best thing about a boolean is even if you are wrong, you are only off by a bit."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
