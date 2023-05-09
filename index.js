const express = require('express')
const culture = require("./routes/Culture")
const travel = require("./routes/Travel")

const app = express()
const cors = require('cors')


app.use(cors())
app.use("/", culture)
app.use("/", travel)

app.listen(3001, (req,res) => {
    console.log("App is running")
})