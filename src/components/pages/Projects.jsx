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
          img="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
          title="Repo One"
          description="First Repo"/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img={require("./images/readme.png")}
          title="README Generator"
          description="A dynamically-generated README file app."/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
          title="Repo One"
          description="First Repo"/></div>
      </div>
      <div className="row secondRow">
      <div className="col-lg-4">
        <DisplayCard 
          img="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
          title="Repo One"
          description="First Repo"/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
          title="Repo One"
          description="First Repo"/></div>
      <div className="col-lg-4">
        <DisplayCard 
          img="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
          title="Repo One"
          description="First Repo"/></div>
      </div>  
    </div>
  );
}

export default Projects;