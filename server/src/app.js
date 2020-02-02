const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// support parsing of application/json type post data
    app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: true }));

// support for using cors
    app.use(cors());

// HTTP request logger middleware for node.js
    app.use(morgan('combined'))

app.get('/status', (req, res) => {
    res.send({
        message: "You go, server!"
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered`
    })
})

app.listen(process.env.PORT || 3000, function() {
    console.log("server now listening on port 3000")
});