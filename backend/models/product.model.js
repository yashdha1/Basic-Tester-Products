import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type : String , 
        required : true
    }, 
    price: {
        type : Number , 
        required : true
    }, 
    image: {
        type : String , 
        required : true
    },
},
{
    timestamps : true,  // makes sure that the product has created ata and updated at option 
})


const Product = mongoose.model('Product', productSchema) 
// mongoose converts this to lowercase and plural = "products"

export default Product ; 