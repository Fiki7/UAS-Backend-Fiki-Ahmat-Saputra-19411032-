const router = require('express').Router()
const orderController = require('../controller/Order')
const uploadSetting = require('../uploadConfig')
const fields = uploadSetting.upload.fields([
    {
        name: 'image',
        maxCount: 1
    }
])

router.post('/insert', fields, (req, res) => {
  const imageName = uploadSetting.cekNull(req.files['image'])

  const data =  Object.assign(JSON.parse(req.body.data), {
    image: imageName
  })

orderController.insert(data)
   .then((result) => res.json(result))
   .catch((err) => res.json(err))
})

router.get('/getallorder', (req, res) => {
  orderController.getAllOrder()
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

router.get('/getorderbyuser/:id', (req, res) => {
  orderController.getOrderByUser(req.params.id)
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

router.put('/konfirmasiorder/:id', (req, res) => {
  orderController.konfirmasiOrder(req.params.id)
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

router.put('/terimabarang/:id', (req, res) => {
  orderController.terimaDonor(req.params.id)
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

module.exports = router