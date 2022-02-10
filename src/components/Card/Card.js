import React from "react";
import image from "../../assets/images/image-qr-code.png"
import "./Card.css"


const card = (props) => {


    return (
        <main className="container">
            <header>
                <img className="card-image" src={image} alt="qrcode"/>
            </header>
            <section>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-description">{props.description}</p>
            </section>
        </main>
    )
};

export default card;

