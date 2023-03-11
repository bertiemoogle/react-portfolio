import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {RxTwitterLogo} from "react-icons/rx";
import {ImHtmlFive2} from "react-icons/im";
import {ImCss3} from "react-icons/im";
import {TbBrandJavascript} from "react-icons/tb";
import {FaReact} from "react-icons/fa";
import {BsBootstrap} from "react-icons/bs";
import {FaNodeJs} from "react-icons/fa";

// Short bio page containing information about tech I am proficient in. Media icons in the footer don't all lead to accounts with those services.

function About() {
  return (
    <div>
      <h1 className="headerFont">About Me</h1>
        <div class="row aboutRow">
          <img src={require("./images/think.png")} className="thinkImg" alt="A person thinking" />
            <div className="col-lg-5 col-sm-12">
            <ul className="skillsList">
              <li>Proficient In:</li>
              <li><ImHtmlFive2 /> HTML</li>
              <li><ImCss3 /> CSS</li>
              <li><TbBrandJavascript /> JavaScript</li>
              <li><FaReact /> React.js</li>
              <li><BsBootstrap /> Bootstrap</li>
              <li><FaNodeJs /> Node.js</li>
            </ul>
        </div>
            <div className="row">
              <footer>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><RxTwitterLogo/></a>
              </footer>
            </div>
        </div>
    </div>
  );
}

export default About;

