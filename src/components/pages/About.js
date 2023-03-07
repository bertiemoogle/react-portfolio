import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <h1 className="headerFont">About Me</h1>
        <div class="row aboutRow">
          <img src={require("./images/aGRsaGd_d.jpg")} className="thinkImg" alt="A person thinking" />
            <div class="col-lg-5 col-sm-12">
                <p>Having been ill for a long time with anxiety and depression I decided
                    I needed to do something constructive to occupy my time. I first studied for, and graduated with, an
                    honours degree in literature, having had vague ideas about becoming a teacher. After that I
                    came across the Python programming language and discovered that I love writing code. The opportunity
                    to attend this front end web development bootcamp arose, which I have eagerly taken up. The world
                    wide web is still in its infancy, and I don't want to merely see what happens to it - I really want
                    to be a part of it.
                </p>
            </div>
            
        </div>
    </div>
  );
}

export default About;