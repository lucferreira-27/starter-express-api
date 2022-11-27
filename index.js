
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express')
import fetch from 'node-fetch';
const dontpad = require('dontpad-api');
const cron = require('node-schedule');

let test = 1;
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(`Yo! ${test}`)
})
app.listen(process.env.PORT || 3000)


cron.scheduleJob('*/1 * * * * *', async () => {
    console.log(test++, new Date().toLocaleTimeString());
})

