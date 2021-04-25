// import other routes
const articleRoutes = require('./articles');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    articleRoutes(app, fs);

};

module.exports = appRouter;