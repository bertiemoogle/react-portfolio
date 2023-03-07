import React from "react";

function DisplayCard(props) {
    return (
        <div className="card">
            <div className="cardBody">
                <img src={props.img} className="testImg" alt="test"/>
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
            </div>
            <button className="cardBtn">GitHub Repo</button>
        </div>
    );
  }
  
  export default DisplayCard;