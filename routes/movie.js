const {Router} = require('express')
const router = Router()
const authRouter = require('./auth')
const {getMovies, getMovie} = require('../controllers')



router.get('/movies/:page',getMovies)
router.get('/movie/:id',getMovie)

module.exports = router