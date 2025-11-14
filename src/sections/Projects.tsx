import React from 'react';
import './Projects.css';
import Project_jpog from '../assets/project_jpo.png';
import Project_siam from '../assets/siam_game.png';
import Project_recipe from '../assets/gestion_recette.png';

function Projects() {
    const handleClick = (project: string) => {
        alert(`No live URL available for ${project}`);
    };

    return (
        <section id="projects" className="projects-section">
            <h1 className="projects-title">My Work</h1>

            <div className='projects-container'>

                {/* Project 1 */}
                <div className='project-card'>
                    <img src={Project_siam} alt='Project siam' />
                    <h3>Siam Game</h3>
                    <p>A browser-based implementation of the Siam board game with movement logic, directional mechanics, and a clean UI.</p>
                    <div className="project-buttons">
                        <a href='https://siamgame.netlify.app' target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/Diozizo/siam-game" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className='project-card'>
                    <img src={Project_jpog} alt='Project jpo' />
                    <h3>JPO Web App</h3>
                    <p>Interactive full-stack app for university open days with a map, event listings, and a Flask + PostgreSQL backend.</p>
                    <div className="project-buttons">
                        {/* Use # with click handler to keep styling and fix ESLint */}
                        <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); handleClick("JPO Web App"); }}>View Project</a>
                        <a href="https://github.com/Diozizo/projet_JPO" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className='project-card'>
                    <img src={Project_recipe} alt='Project recipe manager' />
                    <h3>Recipe Manager</h3>
                    <p>A modern recipe management platform built with Next.js and PostgreSQL, featuring CRUD, and a smooth UI.</p>
                    <div className="project-buttons">
                        <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); handleClick("Recipe Manager"); }}>View Project</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); handleClick("Recipe Manager Source"); }}>Source Code</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;
