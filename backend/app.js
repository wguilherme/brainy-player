const express = require('express');
const app = express()
const dirTree = require('directory-tree');
const cors = require("cors")

app.listen(3100, () => console.log("server is running in port 3100"))

app.use(cors())

app.get("/courses", async (req, res) => {
   const filteredTree = dirTree("./courses", [])
   console.log(filteredTree)
   res.status(200).json(filteredTree)
})