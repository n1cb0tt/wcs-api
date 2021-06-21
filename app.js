require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.API_PORT;
const tableLog = require('./utils/tableLog');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const argonautes = require('./routes/argonautes.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json-patch+json' }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://146.59.195.171:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (request, response) => {
    response.send('Invalid route!');
});

app.use('/argonautes', argonautes);

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    tableLog(`API server is listening on ${port}`);
});