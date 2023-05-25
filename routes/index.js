const authRouter = require('./auth')
const movieRouter = require('./movie')

module.exports = (app) =>{
    app.use('/auth',authRouter)
    app.use(movieRouter)
    app.get('/',(req,res,next)=>{
        res.json({
            message: "welcome to homepage"
        })
    })
    
    
    app.get('/user/:id',(req,res,next)=>{
        res.json({
            message: `welcome to users page aha ${req.params.id}` 
        })
    })
}