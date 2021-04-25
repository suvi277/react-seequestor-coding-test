const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(4000, () => {
    console.log('listening on port %s...', server.address().port);
});