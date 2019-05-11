const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true}
});

ProjectSchema.methods.get_public_data = function() {
    return {
        name: this.name,
        desc: this.desc
    };
};

module.exports = mongoose.model('ProjectModel', ProjectSchema);
