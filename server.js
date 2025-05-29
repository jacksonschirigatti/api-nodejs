import express from "express";

const app = express();

app.post("/users", (req, res) => {
  console.log(req);
  
  res.send("Post OK...")
})

app.get("/users", (req, res) => {
  res.send("Working...");
});

app.listen("3000");
