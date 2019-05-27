module.exports = (app) => {
    const project_controller = require('../controllers/project_controller');
    
    const multer = require("multer");
    const upload = multer({
        dest: "./uploads"
    });

    app.post('/api/project', upload.single("image") , async (req, res, next) => {
            console.log(req.file);

            let response = await project_controller.createProject(req.body.name, req.body.desc);

            console.log(response);

            if (!response.isError) {
                res.json({
                    project: response.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route('/api/project')
        .get(async (req, res, next) => {
            let response = await project_controller.getProjectByName(req.query.name);

            if (!response.isError) {
                res.json({
                    project: response.project.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route('/api/project')
        .put(async (req, res, next) => {
            let response = await project_controller.updateProject(req.body.oldName, req.body.newName, req.body.newDesc);

            console.log('Back to Route', response);
            if (!response.isError) {
                res.json({
                    project: response.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route('/api/project')
        .delete(async (req, res, next) => {
            let response = await project_controller.deleteProject(req.query.name);

            if (!response.isError) {
                res.json({
                    response: response
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route('/api/project/all')
        .get(async (req, res, next) => {
            let response = await project_controller.getAllProjects();
            if (!response.isError) {
                res.json({
                    projects: response.projects.map(project => project.get_public_data())
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });
};

