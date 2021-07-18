import React, { useState } from 'react';
import Navigation from './navigation';
import AboutMe from './aboutme';
import ContactMe from './contactme';
import Resume from './resume';
import Project from './project';

export default function Container() {
    const [currentTab, setCurrentTab] = useState('AboutMe');

    const renderTab = () => {
        if (currentTab === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentTab === 'ContactMe') {
            return <ContactMe />
        }
        if (currentTab === 'Resume') {
            return <Resume />
        }
        if (currentTab === 'Projects') {
            return <Project />
        }
    };

    const handleTabChange = (tab) => setCurrentTab(tab);

    return (
        <div>
            <Navigation currentTab={currentTab} handleTabChange={handleTabChange} />
            {renderTab()}
        </div>
    );
}