import type { RequestHandler } from "express";

// Import access to data
import warriorsRepository from "./warriorsRepository";

// La méthode qui récupère tous les guerriers avec leurs armes
const browseWithWeapons: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer tous les guerriers avec leurs armes via la méthode du repository
    const warriorsWithWeapons = await warriorsRepository.readAllWithWeapons();

    // Répondre avec les données sous forme de JSON
    res.json(warriorsWithWeapons);
  } catch (err) {
    // Passer l'erreur au middleware de gestion des erreurs
    next(err);
  }
};

// Les autres méthodes CRUD pour les guerriers
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all warriors
    const warriors = await warriorsRepository.readAll();

    res.json(warriors);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const warriorsId = Number(req.params.id);
    const warriors = await warriorsRepository.read(warriorsId);

    if (warriors == null) {
      res.sendStatus(404);
    } else {
      res.json(warriors);
    }
  } catch (err) {
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
      faction: req.body.faction,
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

const add: RequestHandler = async (req, res, next) => {
  try {
    const newWarrior = {
      nom: req.body.nom,
      age: req.body.age,
      race: req.body.race,
      img: req.body.img,
      faction: req.body.faction,
    };

    const insertId = await warriorsRepository.create(newWarrior);

    res.status(201).json({ insertId });
  } catch (err) {
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

const getGoodWarriors: RequestHandler = async (req, res, next) => {
  try {
    const goodWarriors = await warriorsRepository.readByFaction("bien");
    res.json(goodWarriors);
  } catch (err) {
    next(err);
  }
};

const getDarkWarriors: RequestHandler = async (req, res, next) => {
  try {
    const darkWarriors = await warriorsRepository.readByFactionDark("mal");
    res.json(darkWarriors);
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  browseWithWeapons, // Ajouter cette ligne pour l'action de récupération des guerriers avec armes
  read,
  edit,
  add,
  destroy,
  getDarkWarriors,
  getGoodWarriors,
};
