import React from "react";
import image from "../../assets/images/image-qr-code.png"
import "./Card.css"


const card = (props) => {


    return (
        <div className="container">
            <img className="card-image" src={image} alt="qrcode"/>
            <h4 className="card-title">{props.title}</h4>
            <p className="card-description">{props.description}</p>
        </div>
    )
};

export default card;

