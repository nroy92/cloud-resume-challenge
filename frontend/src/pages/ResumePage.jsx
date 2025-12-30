import React from "react";

export default function ResumePage () {
    return (
        <>
        <section className="header">
            <h1>Nikko Roy</h1>
            <p>
                Somerville, NJ
                &bull;
                <a href="nikko.roy.business@gmail.com">nikko.roy.business@gmail.com</a>
            </p>
            </section>

            <section className="Experience">
            <h2>Experience</h2>
            <div className="items">
                <div className="item">
                <div className="item_heading">
                    <div className="info">
                    <h3>Kumon of North America &mdash; QA Analyst/Business Application Support</h3>
                    </div>
                    <div className="details">
                    <div className="location">Rutherford, NJ</div>
                    <div className="duration">2025 - Present</div>
                    </div>
                </div>
                <ul>
                    <li>TO DO: Fill out with experience</li>
                </ul>
                </div>
            </div>
            </section>

            <section className="Skills">
            <h2>Skills</h2>
            <div>TO DO: Fill out skills, use similar format from other sections</div>
            </section>

            <section className="Certifications">
            <h2>Certifications</h2>
            <div>TO DO: Fill out Certifications, use similar format from other sections</div>
            </section>

            <section className="Education">
            <h2>Education</h2>
            <div className="items">
                <div className="item">
                <div className="info">
                    <h3>New Jersey Institute of Technology</h3>
                    <p>B.S. in Information Technology</p>
                </div>
                <div className="details">
                    <div className="location">Newark, NJ</div>
                    <div className="duration">2010 - 2015</div>
                </div>
                </div>
            </div>
            </section>
        </>
    );
}