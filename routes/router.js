const express = require("express");
const { User } = require("../modal/model");
const { Groups } = require("../modal/model");

const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  const data = new User({
    fullname: req.body.fullname,
    photo: req.body.photo,
    email: req.body.email,
    job: req.body.job,
    mobile: req.body.mobile,
    group: req.body.group,
  });
  try {
    const datasave = await data.save();
    res.status(200).json(datasave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getall", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getone/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const option = { new: true };

    const result = await User.findByIdAndUpdate(id, updateData, option);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.send(`User with ${data.fullname} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// create Group

router.post("/postgroup", async (req, res) => {
  const data = new Groups({
    id: req.body.id,
    name: req.body.name,
  });
  try {
    const datasave = await data.save();
    res.status(200).json(datasave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Groups
router.get("/getgroups", async (req, res) => {
  try {
    const data = await Groups.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Group
router.get("/getgroup/:id", async (req, res) => {
  try {
    const data = await Groups.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
