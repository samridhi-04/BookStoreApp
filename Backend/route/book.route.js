import express from 'express';
import {getBook, buyNow} from '../controller/book.controller.js'
const router = express.Router()
router.get("/",getBook);
router.post("/buy-now", buyNow);
export default router;