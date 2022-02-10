import React from "react";
import image from "../../assets/images/image-qr-code.png"
import "./Card.css"


const card = (props) => {

    return (
        <div className="container">
            <header>
                <img className="card-image" src={image} alt="qrcode"/>
            </header>
           <section>
               <h1 className="card-title">{props.title}</h1>
               <p className="card-description">{props.description}</p>
           </section>
        </div>
    )
};

export default card;

