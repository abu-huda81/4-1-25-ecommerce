import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello, World! from orders')
})

export default router