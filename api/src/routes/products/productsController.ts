import { Request, Response } from 'express'
import { db } from '../../db/index'
import { productsTable } from '../../db/productsSchema'
import { eq } from 'drizzle-orm'

// products list:
export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable)
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' })
  }
}

// get product by id:
export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(id)))
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' })
  }
}

// create product:
export async function createProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning()

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' })
  }
}

// update product:
export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params
    const updatedFields = req.body
    const [product] = await db
      .update(productsTable)
      .set(updatedFields)
      .where(eq(productsTable.id, Number(id)))
      .returning()
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' })
  }
}

// delete product:
export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params
    const [delatedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(id)))
      .returning()
    if (delatedProduct) {
      res.status(204).send({ message: 'Product deleted successfully' })
    } else {
      res.status(404).send({ message: 'Product was not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' })
  }
}
