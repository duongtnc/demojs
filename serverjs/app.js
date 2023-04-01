const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});


app.post("/payment", (req, res) => {
  const body = req.body;
  console.log('body is ' + body.name)
  res.send("ok")
})

app.get("/", (req, res)=>{
  res.send("get send hello")
  
})

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));