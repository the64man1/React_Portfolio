import React from 'react';
import resume from '../assets/docs/newresume.pdf'

function Resume() {
    return (
    <div class="row container card-panel left-align">
        <h3>Resume and Proficiencies</h3>
        <h5>Download my resume: </h5>
        <a href={resume} class="waves-effect waves-light btn" target="_blank"><i class="material-icons left">file_download</i>Download</a>
        <h4>Proficiencies</h4>
        <h5>Front-End:</h5>
        <ul>
            <li>HTML5</li>
            <li>CSS3 - including Bootstrap, Materialize, Bulma</li>
            <li>JavaScript ES6+</li>
            <li>jQuery</li>
            <li>Mobile-First, Responsive Design</li>
            <li>React</li>
        </ul>
        <h5>Back-End:</h5>
        <ul>
            <li>SQL, mySQL, and Sequelize</li>
            <li>MongoDB and Mongoose</li>
            <li>NodeJS</li>
            <li>RESTful APIs</li>
            <li>Express</li>
            <li>GraphQL</li>
        </ul>
    </div>
    )
}

export default Resume;