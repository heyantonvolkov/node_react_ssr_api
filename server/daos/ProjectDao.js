const mongoose = require("mongoose");
const ProjectModel = mongoose.model("ProjectModel");

const createProject = async (name, desc) => {
    const project = new ProjectModel({
        name: name,
        desc: desc
    });
    return await project.save();
};

const getProjectByName = async (name) => {
    return await ProjectModel.findOne({name: name});
};

const getAllProjects = async () => {
    return await ProjectModel.find();
};

const deleteProject = async (project) => {
    return await project.remove();
};

const updateProject = async (project, newName, newDesc) => {
    project.name = newName;
    project.desc = newDesc;

    return await project.save();
};

module.exports = {
    createProject,
    getProjectByName,
    getAllProjects,
    updateProject,
    deleteProject
};
