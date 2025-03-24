import type { RequestHandler } from "express";

import Joi from "joi";

const warriorSchema = Joi.object({
  name: Joi.string().min(3).max(40).required().messages({
    "string.min": "Une longueur de 3 caractères est demandée",
    "string.empty": "Le champ ne peut pas être vide",
    "any.required": "Le champ est obligatoire",
  }),
  nom: Joi.string().required(),
  race: Joi.string().required(),
  age: Joi.number().required(),
  img: Joi.string().required(),
});

const validate: RequestHandler = (req, res, next) => {
  console.info("Requête reçue :", req.body);
  const { error } = warriorSchema.validate(req.body);

  if (error) {
    res.json(error.details[0].message);
  } else {
    next();
  }
};

export default { validate };
