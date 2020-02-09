const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models')
const config = require('./config/config')

// support parsing of application/json type post data
    app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: true }));

// support for using cors
    app.use(cors());

// HTTP request logger middleware for node.js
    app.use(morgan('combined'))

require('./routes')(app)

sequelize.sync({ force:false })
    .then(() => {
        app.listen(config.port, function() {
            console.log(`server now listening on port ${config.port}`)
        }); 
    })

