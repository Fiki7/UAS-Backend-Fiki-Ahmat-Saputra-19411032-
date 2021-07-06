const router = require('express').Router()
const userController = require('../controller/User')

router.post('/register', (req, res) => {
    userController.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
    userController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/getalluser', (req, res) => {
    userController.getAllUser()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router