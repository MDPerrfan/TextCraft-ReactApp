import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px",color:"#45494c" }}>
       <span style={{color:"#45494c" }}>Days I</span> <strong className="coral">Code</strong>
      </h1>
      <GitHubCalendar
        username="MDPerrfan"
        blockSize={15}
        blockMargin={5}
        color="green"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
