// Set up express server 

const express = require('express')
const app = express()
const router = require ('./router.js')
const cors = require('cors') // needed to make requests to API

const PORT = 3000

// this order matters:
app.use(cors()) 
app.use(express.json()) 
app.use(router)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => 
    console.log(`listening @ http://localhost:${PORT}` )
)