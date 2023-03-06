import React from "react";
import "../css/home.css";

function Home() {
  return (
    <div>
      <h1 className="headerFont">James Fahey</h1>
      <h2>Front End Web Developer</h2>
      <img src={require("./images/moogle.png")} className="avatarImg" alt="A moogle" />
    </div>
  );
}

export default Home;