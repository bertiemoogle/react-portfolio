import React from "react";
import "../css/home.css";
import CV from "./images/CV.pdf"
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1 className="headerFont fade-in-text-1">James Fahey</h1>
      <h2 className="fade-in-text-2">Front End Web Developer</h2>
      <div class="fade-in-image">
      <img src={require("./images/moogle.png")} className="avatarImg" alt="A moogle" />
      <div class="text-center">
      <button type="button" class="btn btn-primary" ><a href={CV} className="cvDownload" download>Download CV</a></button>
      </div>
      </div>
    </div>
  );
}

export default Home;