const connectToMongo = require('./db')
const express = require("express")
const app = express()
const PORT = 3000

// Route for HomePage


app.use("/api/auth", require('./routes/auth')) 
app.use("/api/notes", require('./routes/notes')) 

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})
connectToMongo();