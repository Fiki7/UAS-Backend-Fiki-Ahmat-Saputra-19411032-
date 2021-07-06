const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donorSchema = new Schema({
    NamaRelawan: {
        type: String
    },
    golonganDarah: {
        type: String
    },
    tahun: {
        type: String,
        default: '2020'
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('donor', donorSchema)