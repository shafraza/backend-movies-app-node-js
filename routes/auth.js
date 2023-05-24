const {Router} = require('express')
const router = Router()
const {getLogin} = require('../controllers')

router
.get('/login', getLogin)
.post('login')
.get('signup')
.post('signup')

module.exports = router