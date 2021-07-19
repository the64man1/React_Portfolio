import React from 'react';
//import '../App.css';

function Project() {
    const projects = [
        {
            name: 'Galleria',
            description: 'An e-commerce website for buying and selling art. The website employs the Handlebars engine to render gallery content, MySQL to store data, and Express for routing.',
            github: 'https://github.com/kthendavid04/gallery',
            deployed: 'https://whispering-river-42546.herokuapp.com/',
            image: 'images/Galleria.png'
        },
        {
            name: 'Gooberville-Foods',
            description: 'A website where users can search for recipes and save recipes and comments for later. Application makes use of third-part APIs to find recipes and local storage for saving recipes and comments.',
            github: 'https://github.com/the64man1/Gooberville-Foods',
            deployed: 'https://the64man1.github.io/Gooberville-Foods/',
            image: 'images/Gooberville Food New.png'
        },
        {
            name: 'Tech Blog',
            description: 'A simple full-stack blog website built using MVC convention. User accounts and posts are stored in MySQL database, with Sequelize as the ORM, and the Handlebars engine is used to dynamically update content.',
            github: 'https://github.com/the64man1/Tech_Blog',
            deployed: 'https://aq-tech-blog.herokuapp.com/',
            image: 'images/Tech Blog.png'
        },
        {
            name: 'Workout Tracker',
            description: 'Track your workouts using MongoDB to store your history. Application uses MongoDB to store data, with Mongoose as the ODM',
            github: 'https://github.com/the64man1/Workout_Tracker',
            deployed: 'https://aq-fitness-tracker.herokuapp.com/',
            image: 'images/Workout Tracker.png'
        },
        {
            name: 'Budget Tracker',
            description: 'Progressive Web App for tracking your budget, even if offline. Implements a service worker to cache data and IndexDB to store data while offline.',
            github: 'https://github.com/the64man1/Budget_Tracker',
            deployed: 'https://aq-budget-tracker.herokuapp.com/',
            image: 'images/Budget Tracker.png'
        },
        {
            name: 'Employee Tracker',
            description: 'Biuld and manage a SQL database of employees through the command line. Application uses Inquirer Node package to handle user input and stores data in a MySQL database.',
            github: 'https://github.com/the64man1/Employee-Tracker',
            deployed: 'https://youtu.be/05w6EtnzdvE',
            image: 'images/Employee Tracker.png'
        }
    ];

    // return projects.map((project, i) => {
    //     return <div class="row card-panel" key={i}>
    //                     <h4>{project.name}</h4>
    //                     <p class="col s6 project-content">{project.description}</p>
    //                     <div class="col s6">
    //                       <a href={project.github} target="_blank" class="col waves-effect waves-light btn-small"><i class="material-icons right">laptop_mac</i>GitHub Repo</a>
    //                     </div>
    //                 <a href={project.deployed} target="_blank" class="hero link1-pic flex-center projectlink">
    //                     <div class="center hero-text">
    //                         <p class="link-text">Click to go to deployed site</p>
    //                     </div>
    //                 </a>
    //     </div>
    // })

    return (
        <section class="row mt-0 container-fluid blue darken-3 projects">
            <h3 class="row center">Projects</h3>
            <div class="row">
                <div class="col m6 s12">
                    {
                        projects.map((project, i) => {
                            return (
                            // <div class="row card-panel" key={i}>
                            //                 <h4>{project.name}</h4>
                            //                 <p class="col s6 project-content">{project.description}</p>
                            //                 <div class="col s6">
                            //                   <a href={project.github} target="_blank" class="col waves-effect waves-light btn-small"><i class="material-icons right">laptop_mac</i>GitHub Repo</a>
                            //                 </div>
                                        // <a href={project.deployed} target="_blank" class="hero link1-pic flex-center projectlink">
                                        //     <div class="center hero-text">
                                        //         <p class="link-text">Click to go to deployed site</p>
                                        //     </div>
                                        // </a>
                            // </div>
                            // <div class="card">
                            //     <div class="card-image">
                            //         <img src={project.image} />
                            //         <span class="card-title">{project.name}</span>
                            //         <a href={project.github} target="_blank" class="btn-floating halfway-fab waves-effect waves-light"><i class="material-icons">laptop_mac</i>GitHub Repo</a>
                            //     </div>
                            //     <div class="card-content">
                            //         <p>{project.description}</p>
                            //     </div>
                            // </div>
                        <div class="card">
                            <div class="card-image">
                              <img src={project.image} />
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title">{project.name}</span>
                                    <p>{project.description}</p>
                                <div class="card-action row">
                                    <a href={project.github} target="_blank" class="col m6 s6 waves-effect waves-light btn-small"><i class="material-icons right">laptop_mac</i>GitHub Repo</a>
                                    <a href={project.deployed} target="_blank" class="col m6 s6 waves-effect waves-light btn-small"><i class="material-icons right">laptop_mac</i>Deployed Site</a>
                                </div>
                            </div>
                        </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Project;