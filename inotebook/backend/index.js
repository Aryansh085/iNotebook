const connectToMongo = require('./db')
var cors = require('cors')

const express = require("express")
const app = express()
const PORT = 5000

// Route for HomePage
app.use(cors())
app.use(express.json())

app.use("/api/auth", require('./routes/auth')) 
app.use("/api/notes", require('./routes/notes')) 

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})
connectToMongo();