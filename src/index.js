require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', async(req,res)=>{
    return res.json('Api esta Ok ')
})


app.listen(port,()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})