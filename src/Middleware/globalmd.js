let moment = require('moment')

const GBMiddleware = function ( req , res , next){

    console.log(moment().format('HH:mm:ss'))
    console.log(req.socket.remoteAddress)
    console.log(req.originalUrl)
    next()
}

module.exports.GB = GBMiddleware