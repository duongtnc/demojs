const express = require("express");
const cors = require("cors");

const app = express();
var router = express.Router();
app.use(cors());
app.use(express.json())

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});




app.get("/", (req, res)=>{
  res.send("send hello")
  
})



app.post("/payment", (req, res) => {
  console.log("body is " + JSON.stringify(req.body))
  res.send("I get your dataaaa")

})

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));