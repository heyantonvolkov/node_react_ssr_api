const mongoose = require("mongoose");
const ProjectModel = mongoose.model("ProjectModel");

const createProject = async (name, desc) => {
    const project = new ProjectModel({
        "name": name,
        "desc": desc
    });
    return await project.save();
};

const getProjectByName = async (name) => {
    return await ProjectModel.findOne({"name": name});
};

const getAllProjects = async () => {
    return await ProjectModel.find();
};

const deleteProject = async (name) => {
    return await ProjectModel.findOneAndRemove({"name": name},
        {useFindAndModify: false});
};

const updateProject = async (oldName, newName, newDesc) => {
    return await ProjectModel.findOneAndUpdate(
        {name: oldName},
        {$set: {name: newName, desc: newDesc}},
        {useFindAndModify: false, new: true}
    )
};

module.exports = {
    createProject,
    getProjectByName,
    getAllProjects,
    updateProject,
    deleteProject
};
