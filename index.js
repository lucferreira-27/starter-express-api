const express = require('express')
const cron = require('node-schedule');

let test = 1;
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(`Yo! ${test}`)
})
app.listen(process.env.PORT || 3000)


cron.scheduleJob('*/60 * * * * *', () => {
    console.log(' MY CRON SAYS: "60 seconds has pass".')
    test++
})

