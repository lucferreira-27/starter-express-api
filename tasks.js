const schedule = require('node-schedule');


module.exports = (time) => {
    schedule.scheduleJob('*/60 * * * * *', function () {
        console.log('The answer to life, the universe, and everything!');
        time++
    });
}

