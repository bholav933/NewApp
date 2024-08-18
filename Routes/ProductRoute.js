import express from 'express';
import { addProductInBulk, viewAllProduct } from '../Controller/ProductController.js';
const router = express.Router();

router.post("/addProductInBulk", addProductInBulk)
router.get("/viewAllProduct", viewAllProduct)
export default router;