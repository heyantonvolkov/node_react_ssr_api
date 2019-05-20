import express from 'express'
import path from 'path'
import stateRoutes from './server/stateRoutes'
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

// Используем фреймворк Express для быстрой разработки на Node.js
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const MONGODB = "mongodb://localhost/react-app";

mongoose.connect(MONGODB, {
    useNewUrlParser: true
});
require('./server/models/ProjectModel');
require('./server/routes/project_route')(app);

// Обрабатываем статичные файлы
app.use(express.static('public'));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

// Слушаем приложение на 3000 порте, если он не задан процессом
const PORT = process.env.PORT || 3005;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Here we go on PORT ${PORT}`)
});

// Главный роутинг - обрабатывает GET-запросы и отдает state приложения - это
// может быть как константа, так и строки таблиц БД.
stateRoutes(app);

export default app;
