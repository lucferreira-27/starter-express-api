const express = require('express')
const cron = require('node-schedule');

const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

cron.scheduleJob('*/5 * * * * *', () => {
    console.log(' MY CRON SAYS: "5 seconds has pass".')
})

cron.scheduleJob('*/60 * * * * *', () => {
    console.log(' MY CRON SAYS: "60 seconds has pass".')
})