const express = require('express');
const app = express();

const reqReceivedMiddleware = (req, res, next) => {
    console.log(`Request received: ${new Date().toISOString()}
                                   ${req.method} ${req.originalUrl}`);

    next();
}

module.exports = reqReceivedMiddleware