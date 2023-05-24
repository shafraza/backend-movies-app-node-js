const authRouter = require('./auth')

module.exports = (app) =>{
    app.use('/auth',authRouter)
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