import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.send("Working...");
});

app.listen("3000");
