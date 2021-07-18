import React from 'react';
//import '../App.css';

function Navigation({ currentTab, handleTabChange}) {
    return (
        <nav>
            <div class="nav-wrapper blue darken-3">
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#aboutme" onClick={() => handleTabChange('AboutMe')} className={currentTab === 'AboutMe' ? 'black-text' : 'white-text'}>About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactme" onClick={() => handleTabChange('Resume')} className={currentTab === 'Resume' ? 'black-text' : 'white-text'}>Resume</a></li>
                <li><a href="#contactme" onClick={() => handleTabChange('ContactMe')} className={currentTab === 'ContactMe' ? 'black-text' : 'white-text'}>Contact Me</a></li>
            </ul>
            </div>
            <ul class="sidenav sidenav-close" id="mobile-demo">
                <li><a href="#aboutme">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="./assets/docs/resume.pdf" target="_blank">Resume</a></li>
                <li><a href="#contactme">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;