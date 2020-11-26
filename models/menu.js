const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
    item_name:{
        type: String,
        required: true
    },
    item_price:{
        type: Number,
        required: true
    },
    item_url:{
        type: String,
        required: true,
    },
    item_type:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menu', MenuSchema)