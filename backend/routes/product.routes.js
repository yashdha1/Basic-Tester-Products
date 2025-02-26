import express from 'express' ; 
import { deleteProduct, getProduct, updateProduct, createProduct } from '../controller/product.controller.js';

const router = express.Router(); 


// product endpoints 
router.post('/', createProduct);
router.delete('/:id',  deleteProduct ); 
router.get('/',  getProduct);
router.put('/:id', updateProduct);


export default router ; 