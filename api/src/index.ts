import express, { Request, Response, json, urlencoded } from 'express'
import productsRoutes from './routes/products/index'
import ordersRoutes from './routes/orders/index'

const app = express()
const port = 3001

// middleware
app.use(urlencoded({ extended: false }))
app.use(json())

// routes
app.use('/products', productsRoutes)
app.use('/orders', ordersRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
