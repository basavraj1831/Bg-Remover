import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './Configs/mongodb.js'
import userRouter from './Routes/userRoutes.js'
import imageRouter from './Routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('API Working...'))
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))


