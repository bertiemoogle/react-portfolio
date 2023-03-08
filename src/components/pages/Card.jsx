import React from "react";
import Button from "./Button";

function DisplayCard(props) {
    return (
        <div className="card">
            <div className="cardBody">
                <img src={props.img} className="repoImg" alt="test"/>
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
                <Button {...props.url}/>
            </div>
            
        </div>
    );
  }
  
  export default DisplayCard;