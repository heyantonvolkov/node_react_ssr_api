import ssr from './server'

export default function (app) {
    // For any route we send template
    app.get("*", (req, res) => {
        const response = ssr(req.url);
        res.send(response);
    })
}
