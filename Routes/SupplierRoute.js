import express from 'express';
import { AddSupplier, removeSupplier, updateUser, ViewAllSupplier } from '../Controller/SupplierController.js';

const router = express.Router();
router.post("/addSupplier",AddSupplier);
router.delete("/removeSupplier/:id",removeSupplier)
router.get("/allSuppliers",ViewAllSupplier)
router.put("/updateUser",updateUser)
export default router;
