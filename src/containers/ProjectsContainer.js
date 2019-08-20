import React, { Component } from 'react';

class ProjectsContainer extends Component {
    constructor(){
        this.renderProjects = this.renderProjects.bind(this)
        this.state = {
            projects: {1: 1, 2: 2, 3: 3, 4: 4}
        }
    }

    renderProjects() {
        return this.state.projects.map(
            project => <Project name={project.key} link={project.value} />
        )
    }

    render() {
        return (
            <div className="projects-body">
                {this.renderProjects()}
            </div>
        )
    }
}

export default ProjectsContainer;