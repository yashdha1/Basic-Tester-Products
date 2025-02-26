import Product from '../models/product.model.js';
import mongoose from 'mongoose';


export const createProduct = async (req, res)=>{ // post objects on mongo
    const product = req.body // user will send this data to us 
    if( !product.name ||  !product.price ||  !product.image){
        return res.status(400).json({ success : false, message: "Please fill all the fields..." })
    }
    const newProduct = new Product (product) //creating Product type object where product contains all the files... 
    try {
        await newProduct.save() ;
        res.status(200).json({ success : true , message: "Succesfully created a model... ", data: newProduct }) 
    } catch (error) {
        console.log(`ERROR in creating Product object: ${error.message}`) 
        res.status(500).json({ success : false, message: "INTERNAL SERVER ERROR....!" })
    }
}

export const deleteProduct = async (req, res)=>{ // delete objects on mongo
    const {id} = req.params // destructure ID
    console.log("id:", id) 
    try {
        await Product.findByIdAndDelete(id) 
        res.status(200).json({ sucess: true, message: "Found by Id and deleted..."})
    } catch (error) {
        res.status(400).json({ sucess: false, message: "Could Not find the Product..."})
    }
}

export const getProduct = async (req, res)=>{ // get all objects back from the;  objects on mongo
    try {
        const products =  await Product.find({}); // find all the the model objects if none are mentioned inside the find({})
        res.status(200).json({ sucess: true, message: products })
        console.log("Products Found !!!!")
    } catch (error) {
        res.status(400).json({ sucess: false, message: "none Products..."})
    }
}

export const updateProduct = async (req, res)=>{ // update the objects:  objects on mongo
    const {id} = req.params 
    const product = req.body 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({ success : false, message: "object not found..." })
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new : true }) // update new fields in Model
        res.status(200).json({ success : true , message: "Succesfully Updated a model... ", data: updatedProduct }) 
    } catch (error) {
        res.status(500).json({ success : false, message: "not able to update" })
    }
}

