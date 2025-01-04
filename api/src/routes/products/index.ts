import { Router } from 'express'
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from './productsController'

const router = Router()

// products list:
router.get('/', listProducts)

// get product by id:
router.get('/:id', getProductById)

// create product:
router.post('/', createProduct)

// update product:
router.put('/:id', updateProduct)

// delete product:
router.delete('/:id', deleteProduct)

export default router
