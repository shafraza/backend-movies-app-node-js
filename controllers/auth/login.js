const logger = require('../../configurations/logger')

module.exports.getLogin = (req,res, next)=>{
    logger.info("accessed login url")
    res.send("Welcome to my login page")
}