import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {

  users.push(req.body)

  res.send("Post OK...");
});

app.get("/users", (req, res) => {
  res.json(users)
});

app.listen("3000");

// jacksonschirigatti
// uhcF2t5QikjeVOwi

// jackson
// rp0Nz0iK01LQWyBQ