import mongoose from "mongoose";
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String
    },

    artist:{
        type: String
    },

    date:{
        type: Date
    },

    photo:{
        type: String
    },
    price: {
        type: Number
    }

})

 const Product = mongoose.model("Product",productSchema)

export default Product
