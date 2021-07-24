import React, { Component } from 'react';

function Navigation({ currentTab, handleTabChange}) {
    return (
        <nav>
            <div className="nav-wrapper blue darken-3">
            <ul className="right">
                <li><a href="#aboutme" onClick={() => handleTabChange('AboutMe')} className={currentTab === 'AboutMe' ? 'black-text' : 'white-text'}>About Me</a></li>
                <li><a href="#projects" onClick={() => handleTabChange('Projects')} className={currentTab === 'Projects' ? 'black-text' : 'white-text'}>Projects</a></li>
                <li><a href="#contactme" onClick={() => handleTabChange('Resume')} className={currentTab === 'Resume' ? 'black-text' : 'white-text'}>Resume</a></li>
                <li><a href="#contactme" onClick={() => handleTabChange('ContactMe')} className={currentTab === 'ContactMe' ? 'black-text' : 'white-text'}>Contact Me</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navigation;