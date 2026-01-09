import React from "react";

export default function ResumeSectionItem(props) {
    const item = props.item;
    return (
        <div className="item">
            <div className="item_heading">
                <div className="info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                </div>
                <div className="details">
                <div className="location">{item.location}</div>
                <div className="duration">{item.duration}</div>
                </div>
            </div>
            <ul>
                <li>TO DO: Fill out with experience</li>
            </ul>
            {Array.isArray(item.details) && items.details.length > 0 && (
                <ul>
                    {item.details.map((text) => (
                        <li key={text}>{text}</li>
                    ))}
                </ul>
            )}
        </div>      
    );
}