const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    const todays = new Date();
    response.send(`${todays.getDate()}-${todays.getMonth() + 1}-${todays.getFullYear()}`);
});
module.exports = app;