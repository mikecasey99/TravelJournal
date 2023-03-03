import React from "react"

export default function Location(prop){
    console.log(prop)
    return (
        <div className="location">
            <img src={prop.imageURL} alt={prop.title}/>
            <div className="column">
                <div className="maps">
                    <i class="fa-solid fa-location-dot"></i>
                    <span className="location-name">{prop.location}</span>
                    <a href={prop.googleMapsUrl}  target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1 className="name">{prop.title}</h1>
                <p className="date">{prop.startDate} - {prop.endDate}</p>
                <p className="description">{prop.description}</p>
            </div>
        </div>
    )
}