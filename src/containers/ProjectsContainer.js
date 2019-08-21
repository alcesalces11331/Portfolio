import React, { Component } from 'react';

class ProjectsContainer extends Component {
    constructor(){
        this.renderProjects = this.renderProjects.bind(this)
        this.state = {
            projects: {1: ['address', 'description'], 2: 2, 3: 3, 4: 4}
        }
    }

    renderProjects() {
        return this.state.projects.map(
            project => <Project name={project.key} address={project.value[0]} description={project.value[1]} />
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