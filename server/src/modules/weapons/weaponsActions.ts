import type { RequestHandler } from "express";

// Import access to data
import weaponsRepository from "./weaponsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const weapons = await weaponsRepository.readAll();

    // Respond with the items in JSON format
    res.json(weapons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const weaponsId = Number(req.params.id);
    const weapons = await weaponsRepository.read(weaponsId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (weapons == null) {
      res.sendStatus(404);
    } else {
      res.json(weapons);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const weapons = {
      id: req.body.id,
      type: req.body.type,
    };

    const affectedRows = await weaponsRepository.update(weapons);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newWeapons = {
      type: req.body.type,
    };

    // Create the armes
    const insertId = await weaponsRepository.create(newWeapons);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const weaponsId = Number(req.params.id);
    await weaponsRepository.delete(weaponsId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, destroy };
