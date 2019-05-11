import axios from 'axios';

const apiRequestService = {
    createProject: (newProject) => {
        axios.post('http://localhost:3005/api/project', {
            name: newProject.name,
            desc: newProject.desc
        })
    },

    getProjects: () => {
        return axios.get('http://localhost:3005/api/project/all');
    },

    getProjectByName: (name) => {
        return axios.get('http://localhost:3005/api/project', {
            params: {
                name: name
            }
        });
    },

    updateProjectData: (newData) => {
        return axios.put('http://localhost:3005/api/project', {
            oldName: newData.oldName,
            newName: newData.newName,
            newDesc: newData.newDesc
        });
    },

    deleteProject: (name) => {
        return axios.delete('http://localhost:3005/api/project', {
            params: {
                name: name
            }
        });
    },


};

export default apiRequestService;
