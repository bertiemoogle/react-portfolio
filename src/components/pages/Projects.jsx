import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCard from "./Card";

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
          <a href="https://github.com/bertiemoogle/Weather-Application" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
    </div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/readme.png")}
          title="README.md Generator"
          description="A dynamically-generated README file app"/>
          <a href="https://github.com/bertiemoogle/Readme-Generator" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/scheduler.jpg")}
          title="Daily Appointments"
          description="A dynamic workday scheduler"/>
          <a href="https://github.com/bertiemoogle/Workday-Scheduler" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </div>
      </div>
      <div className="row secondRow">
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/password.png")}
          title="Password Generator"
          description="A user-defined password generator"/>
          <a href="https://github.com/bertiemoogle/Password-Generator" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/quiz.jpg")}
          title="Timed Quiz"
          description="A fun quiz app"/>
          <a href="https://github.com/bertiemoogle/Timed-Quiz" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/script.jpg")}
          title="Online TV Script App"
          description="Ongoing project"/>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </div>
      </div>  
    </div>
  );
}

export default Projects;