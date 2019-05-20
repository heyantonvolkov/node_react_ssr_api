import React from 'react';
import {Helmet} from 'react-helmet';
import apiRequestService from './services/apiRequestService';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsMarkup: ''
        }
    }

    componentDidMount() {
        this.getAndShowProjects();
    }

    render() {
        let projectMarkup = '';

        return (
            <>
                <Helmet>
                    <title>Universal Page</title>
                    <meta name="description" content="Modern Web App - Home Page"/>
                </Helmet>
                <h1>
                    Welcome to base CRUD Api project
                </h1>
                <p>You can fin any description here</p>
                <ul>
                    {this.state.projectsMarkup}
                </ul>
            </>
        )
    }

    async getAndShowProjects() {
        const response = await apiRequestService.getProjects();
        if (!response.error && response.data.projects) {
            let projectList = response.data.projects;
            this.setState({'projectsMarkup': projectList.map((project, i) => {
                    return (
                        <li key={i}>
                            <h2>{project.name}</h2>
                            <p>{project.desc}</p>
                        </li>
                    )
                })});
            console.log(this.state.projectsMarkup);
        } else {
            this.setState({'projectsMarkup': 'Empty over here'});
        }
    }

    async getProjectByName() {
        const response = await apiRequestService.getProjectByName('Lalala');
        if (!response.error) {
            consol.log(response);
        } else {
            console.log(response.error);
        }
    }

    async updateProjectData() {
        const response = await apiRequestService.updateProjectData({
            oldName: 'Karma',
            newName: 'Koma',
            newDesc: 'Kalkatte'
        });
        if (!response.error) {
            consol.log(response);
        } else {
            console.log(response.error);
        }
    }

    async deleteProject() {
        const response = await apiRequestService.deleteProject('Lalala');
        if (!response.error) {
            consol.log(response);
        } else {
            console.log(response.error);
        }
    }
}

