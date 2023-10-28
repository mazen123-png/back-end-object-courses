const mongoose = require('mongoose')
const productsSchema = mongoose.Schema({
        name:{
                type: String
        },
        price:{
                type: Number
        },
        maker:{
                type:String
        }
});

const productsModel = mongoose.model("products",productsSchema)
module.exports = productsModel