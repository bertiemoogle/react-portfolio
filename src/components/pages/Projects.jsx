import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCard from "./Card";

// Links to the GitHub repositories of challenges we have done over the past few months. These will be replaced with React apps over the next few weeks.

function Projects() {
  return (
    <div className="container main-projects-container">
      <header>Projects</header>
      <div className="projects-container">
      <article className="projects">
        <DisplayCard 
          img={require("./images/weatherApp.jpg")}
          title="Weather Dashboard"
          description="Weather app utilising Node.js"/>
          <a href="https://github.com/bertiemoogle/Weather-Application" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
      </article>
      <article className="projects">
        <DisplayCard 
          img={require("./images/readme.png")}
          title="README.md Generator"
          description="A dynamically-generated README file app"/>
          <a href="https://github.com/bertiemoogle/Readme-Generator" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </article>
      <article className="projects">
        <DisplayCard 
          img={require("./images/scheduler.jpg")}
          title="Daily Appointments"
          description="A dynamic workday scheduler"/>
          <a href="https://github.com/bertiemoogle/Workday-Scheduler" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </article>
      
      <article className="projects">
        <DisplayCard 
          img={require("./images/password.png")}
          title="Password Generator"
          description="A user-defined password generator"/>
          <a href="https://github.com/bertiemoogle/Password-Generator" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </article>
      <article className="projects">
        <DisplayCard 
          img={require("./images/quiz.jpg")}
          title="Timed Quiz"
          description="A fun quiz app"/>
          <a href="https://github.com/bertiemoogle/Timed-Quiz" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </article>
      <article className="projects">
        <DisplayCard 
          img={require("./images/script.jpg")}
          title="Online TV Script App"
          description="Ongoing project"/>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><button type="button" className="cardBtn">GitHub Repo</button></a>
          </article>
          </div>
    </div>
  );
}

export default Projects;