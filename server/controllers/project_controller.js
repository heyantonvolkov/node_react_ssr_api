const project_dao = require('../daos/ProjectDao');

const getAllProjects = async () => {
    const projects = await project_dao.getAllProjects();
    if (!projects) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            projects: projects
        }
    }
};

const getProjectByName = async (projectName) => {
    const project = await project_dao.getProjectByName(projectName);
    if (!project) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            project: project
        }
    }
};

const createProject = async (name, desc) => {
    console.log('I\'m here controller');
    const project = await project_dao.createProject(name, desc);

    if (!project) {
        return {
            isError: true,
            error: 'UNKNOWN_EXEPTION'
        }
    } else {
        return {
            project: project
        }
    }
};

const updateProject = async (oldName, newName, newDesc) => {
    const project = await project_dao.updateProject(oldName, newName, newDesc);
    console.log('AFTER DAO', project);
    if (!project) {
        return {
            isError: true,
            error: 'UNKNOWN_EXEPTION'
        }
    } else {
        return project;
    }
};

const deleteProject = async (name) => {
    const response = await project_dao.deleteProject(name);
    console.log('AFTER DELETE', response);

    if (!response) {
        return response;
    }
};

module.exports = {
    getProjectByName,
    createProject,
    getAllProjects,
    updateProject,
    deleteProject
};
