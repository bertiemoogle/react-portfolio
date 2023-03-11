import React from "react";

// Card function using props. Cards rendered through the Projects page.

function DisplayCard(props) {
    return (
        <div className="card">
            <div className="cardBody">
                <img src={props.img} className="repoImg" alt="test"/>
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
                
            </div>
                
        </div>
    );
  }
  
  export default DisplayCard;