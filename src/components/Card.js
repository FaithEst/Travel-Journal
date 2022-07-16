import React from "react";
import './styles.css';

function Card(props){
    return(
        <div className="card">
            <img src={props.cardObject.imageUrl} className="card--image"/>
            <div className="card--details">
                <div className="card--view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" fill="#F55A5A" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <span className="card--location">{props.cardObject.location}</span>
                    <span className="card--map"><a href={props.cardObject.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1 className="card-heading">{props.cardObject.title}</h1>
                <h3 className="card--date">{props.cardObject.startDate} - <span>{props.cardObject.endDate}</span></h3>
                <p className="card--description">{props.cardObject.description}</p>
            </div>
        </div>
    )
}

export default Card;