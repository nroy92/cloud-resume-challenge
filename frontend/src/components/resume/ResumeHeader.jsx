import React from "react";

export default function ResumeHeader(props) {
    const person = props.person;
    return (
        <section className="header">
        <h1>{person.name}</h1>
            <p>
            <span className="address">{person.contact.address}</span>
            <span>&bull;</span>
            <span className="email"><a href="mailto:${person.contact.email}">{person.contact.email}</a></span>
            </p>
        </section>        
    );
}