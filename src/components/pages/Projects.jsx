import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCard from "./Card";
import Button from "./Button";

function Projects() {
  return (
    <div className="container">
      <h1 className="headerFont">Projects</h1>
      <div className="row firstRow">
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/weatherApp.jpg")}
          title="Weather Dashboard"
          description="Weather app utilising Node.js"/>
          
    </div>
          
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/readme.png")}
          title="README Generator"
          description="A dynamically-generated README file app"/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/scheduler.jpg")}
          title="Daily Appointments"
          description="A dynamic workday scheduler"/></div>
      </div>
      <div className="row secondRow">
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/password.png")}
          title="Password Generator"
          description="A user-defined password generator"/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/quiz.jpg")}
          title="Timed Quiz"
          description="A fun quiz app"/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/script.jpg")}
          title="Online TV Script App"
          description="Ongoing project"/></div>
      </div>  
    </div>
  );
}

export default Projects;