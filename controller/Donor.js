const donorModel = require ('../model/Donor')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

exports.insertDonor = (data) =>
  new Promise((resolve, reject) => {
    donorModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input Relawan')))
    .catch(() => reject(requestResponse.serverError))
  })

  exports.getAllDonor = () =>
    new Promise((resolve, reject) => {
        donorModel.find({})
           .then(donor => resolve(requestResponse.suksesWithData(donor)))
           .catch(error => resolve(requestResponse.serverError))
    })

    exports.getbyId = (id) =>
      new Promise((resolve, reject) => {
          donorModel.findOne({
              _id: objectId(id)
          }).then(donor => resolve(requestResponse.suksesWithData(donor)))
          .catch(error => reject(requestResponse.serverError))
      })

exports.editDonor = (data, id, changeImage) =>
  new Promise(async(resolve, reject) => {
    donorModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Daftar Relawan'))
      }).catch(() => reject(requestResponse.serverError))
  })

  exports.delete = (id) =>
    new Promise((resolve, reject) => {
      donorModel.findOne({
        _id: objectId(id)
      }).then(donor => {
        donorModel.deleteOne({
          _id: objectId(id)
        }).then(() => {
          deleteImage(donor.image)
          resolve(requestResponse.sukses('Berhasil Hapus List Relawan'))
        }).catch(() => reject(requestResponse.serverError))
      })
    })