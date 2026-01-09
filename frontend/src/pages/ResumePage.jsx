import React from "react";
import '../assets/stylesheets/pages/resume.css'

import resumeData from '../data/ResumeData.js'
import ResumeHeader from '../components/resume/ResumeHeader.jsx'
import ResumeSectionItem from "../components/resume/ResumeSectionItem.jsx"; 

export default function ResumePage () {
    return (
        <>
        
            <ResumeHeader person={resumeData.person}></ResumeHeader>
            <section className="Experience">
            <h2>Experience</h2>
            <div className="items">
                <ResumeSectionItem item={resumeData.sections.education} />
                {Array.isArray(item.details) && items.details.length > 0 && (
                <ul>
                    {item.details.map((text) => (
                        <li key={text}>{text}</li>
                    ))}
                </ul>
            )}
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
                {Array.isArray(resumeData.sections.education) && resumeData.sections.education.length > 0 && (
                <ul>
                    {resumeData.sections.education.map((item) => (
                        <ResumeSectionItem item={item} />
                    ))}
                </ul>
            )}
            </div>
            </section>
        </>
    );
}