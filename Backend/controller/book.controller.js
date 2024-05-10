import Book from '../model/book.model.js'
export const getBook =async(req,res)=>{
    try {
        const book=await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error:",error);
        res.status(500).json(error);
        
    }
}


book.route.js
import express from 'express';
import {getBook} from '../controller/book.controller.js'
const router = express.Router()
router.get("/",getBook);
export default router;
