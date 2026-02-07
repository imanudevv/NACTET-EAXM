const express = require("express");
const User = require("../models/User");
const router = express.Router();

/* CREATE */
router.post("/users", async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age)
    return res.status(400).json({ message: "All fields required" });

  const user = new User({ name, email, age });
  await user.save();
  res.json(user);
});

/* READ */
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* UPDATE */
router.put("/users/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* DELETE */
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
