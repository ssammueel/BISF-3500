import express from 'express'
import {config} from 'dotenv'

import { connectDb } from './database/connect.js'
import auth from './routes/auth.routes.js'

config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())


app.use("/api",auth)

app.listen(PORT,()=>{
        console.log(`the serve is up and running on port ${PORT}`)
        connectDb()
})