
const express = require('express')
const app = express()
const time = 0
//const task = require('./tasks')
//task(time)
schedule.scheduleJob('*/60 * * * * *', function () {
    console.log('The answer to life, the universe, and everything!');
    time++
});
app.all('/hello', (req, res) => {
    console.log("Just got a request!")
    res.send(`Yo! Hello World ${time}`)
})
app.listen(process.env.PORT || 3000)


