
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


cron.scheduleJob('*/5 * * * * *', async () => {
    await fetch("https://api.dontpad.com/good-jade-trout-vest.cyclic.app", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.6",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1"
        },
        "referrer": "https://dontpad.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "text="+`Yo! ${test}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
    console.log(test++)
})

