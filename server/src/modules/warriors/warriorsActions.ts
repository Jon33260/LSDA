import type { RequestHandler } from "express";

// Import access to data
import warriorsRepository from "./warriorsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const warriors = await warriorsRepository.readAll();

    // Respond with the items in JSON format
    res.json(warriors);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const warriorsId = Number(req.params.id);
    const warriors = await warriorsRepository.read(warriorsId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (warriors == null) {
      res.sendStatus(404);
    } else {
      res.json(warriors);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const warriors = {
      id: req.body.id,
      nom: req.body.nom,
      age: req.body.age,
      race: req.body.race,
      img: req.body.img,
    };

    const affectedRows = await warriorsRepository.update(warriors);

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
    const newWarrior = {
      nom: req.body.nom,
      age: req.body.age,
      race: req.body.race,
      img: req.body.img,
    };

    // Create the item
    const insertId = await warriorsRepository.create(newWarrior);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const warriorsId = Number(req.params.id);
    await warriorsRepository.delete(warriorsId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, destroy };
