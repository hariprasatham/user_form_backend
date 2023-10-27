const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDb = require("./config/connection")
const router = require("./routes/user.routes")

connectDb()
const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

app.use("/api/user", router)

app.listen(PORT, ()=>{console.log(`Server Lisenting on port ${PORT}`)})
