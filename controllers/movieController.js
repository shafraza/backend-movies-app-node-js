const {dbCon} = require('../configurations')
const {ObjectId} = require('bson')
const getMovies = (req,res,next) =>{

    const pageNumber = parseInt(req.params.page)
    if(isNaN(pageNumber)){
        return res.status(400).send('bad request')
    }

    const moviesToSkip = (pageNumber - 1)* 10
    dbCon('movies', async(db)=>{
        const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray()
        res.json(movies)
    })

}
const getMovie = (req,res,next) =>{


       if(!ObjectId.isValid(req.params.id)){
         res.status(400).send('bad request')
       }
      const _id = new ObjectId(req.params.id)
        try {
            dbCon('movies', async(db)=>{
                const movie = await db.findOne({_id})
                if(movie){
                res.json(movie)
                }else{
                    res.json({message: "not found"})
                }
            })
        } catch (error) {
            res.status(400).send('bad request')
            
        }

}


module.exports = {
    getMovies,getMovie
}