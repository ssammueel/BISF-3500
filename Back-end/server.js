import express from 'express'
import {config} from 'dotenv'

config()
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
        console.log(`the serve is up and running on port ${PORT}`)
})