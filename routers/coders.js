// // M --- Model --- Schema
// // V --- View --- UI
// // C --- Controller -- Router


const express = require("express");
const router = express.Router();
const Coder = require("../models/coder");

// GET all coders
router.get("/", async (req, res) => {
  try {
    const coders = await Coder.find();
    res.status(200).json(coders); // Respond with status 200 and the list of coders
  } catch (err) {
    res.status(500).json({ message: "Error retrieving coders", error: err.message });
  }
});

// GET anyone coder by their ID
router.get("/:id", async (req, res) => {
    try {
      const coder = await Coder.findById(req.params.id);
      res.status(200).json(coder); // Respond with status 200 and the list of coders
    } catch (err) {
      res.status(500).json({ message: "Error retrieving coder", error: err.message });
    }
  });

// POST a new coder
router.post("/", async (req, res) => {
  const { name, tech, sub } = req.body;

  // Basic Validation
  if (!name || !tech || typeof sub !== "boolean") {
    return res.status(400).json({ message: "Invalid request data" });
  }

  const coder = new Coder({
    name,
    tech,
    sub,
  });

  try {
    const newCoder = await coder.save();
    res.status(201).json(newCoder); // Status 201 for resource creation
  } catch (err) {
    res.status(500).json({ message: "Error saving coder", error: err.message });
  }
});

//PATCH
router.patch("/:id", async (req, res) => {
    try {
      const coder = await Coder.findById(req.params.id);
      coder.sub = req.body.sub
      const c1 = await coder.save()
      res.json(c1)
    } catch (err) {
      res.status(500).json({ message: "Error Patching coder", error: err.message });
    }
  });

  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      const coder = await Coder.findById(req.params.id);
    //   coder.sub = req.body.sub
      const c1 = await coder.deleteOne()
      res.json(c1)
    } catch (err) {
      res.status(500).json({ message: "Error Deleting coder", error: err.message });
    }
  });

  
module.exports = router;
