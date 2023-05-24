const morgan = require('morgan')
const {logger} = require('../configurations')
module.exports = (app) =>{
    console.log("logger info: ", logger.stream)
    app.use(morgan('dev',{stream: logger.stream}))
}