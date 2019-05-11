import React from 'react';
import {Helmet} from 'react-helmet';
import apiRequestService from './services/apiRequestService';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            projectsMarkup: ''
        };

        this.updateProjectData();
    }

    fireInputEvent(event) {
        console.log(this.arrrr.value);
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
                    Welcome to the page of Universal Web Application
                </h1>
                <ul>
                    {this.state.projectsMarkup}
                </ul>

                <input type="file" ref={el => this.arrrr = el} onChange={this.fireInputEvent.bind(this)}/>
            </>
        )
    }



    async getAndShowProjects() {
        apiRequestService.getProjects()
            .then(response => {
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
            })
    }

    async getProjectByName() {
        apiRequestService.getProjectByName('Lalala')
            .then(response => {
                console.log(response);
            })
    }

    async updateProjectData() {
        apiRequestService.updateProjectData({
            oldName: 'Ffaffa',
            newName: 'пкуфе',
            newDesc: 'Kalkatte'
        })
            .then(response => {
                console.log(response);
            })
    }

    async deleteProject() {
        apiRequestService.deleteProject('Lalala')
            .then(response => {
                console.log(response);
            })
    }
}

