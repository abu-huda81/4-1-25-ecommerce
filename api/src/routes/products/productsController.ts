import {Request, Response} from 'express'

// products list:
export async function listProducts(req: Request, res: Response) {
    res.send('Hello, World! from list products')
    
}

// get product by id:
export async function getProductById(req: Request, res: Response) {
    res.send('Hello, World! from get product by id')
}

// create product:
export async function createProduct(req: Request, res: Response) {
    console.log(req.body)
    res.send('Hello, World! from create product')
}

// update product:
export async function updateProduct(req: Request, res: Response) {
    res.send('Hello, World! from update product')
}

// delete product:
export async function deleteProduct(req: Request, res: Response) {
    res.send('Hello, World! from delete product')
}


