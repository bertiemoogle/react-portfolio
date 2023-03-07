import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Card from 'react-bootstrap/Card';
import DisplayCard from "./Card";

function Projects() {
  return (
    <div>
      <h1 className="headerFont">Projects</h1>
      <div className="row firstRow">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
      <div className="row secondRow">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>  
    </div>
  );
}

export default Projects;