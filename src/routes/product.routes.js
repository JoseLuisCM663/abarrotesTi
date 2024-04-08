import express from 'express';
import ProductController from '../controllers/product.controller.js';

const router = express.Router();

// Rutas para la API de productos
router.post('/', ProductController.insertProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:barcode', ProductController.getProductByBarcode);
router.put('/:barcode', ProductController.updateProductByBarcode);
router.delete('/:barcode', ProductController.deleteProductByBarcode);

export default router;
