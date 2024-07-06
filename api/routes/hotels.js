import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(err);
  }
});
//Update
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, //???
      },
      { new: true } //for when we updated ti db and postman show new updated
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    res.status(500).json(err);
  }
});
//Get
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(err);
  }
});
//Get all
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(err);
  }
});
export default router;
