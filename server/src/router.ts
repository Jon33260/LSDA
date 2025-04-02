import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import des middlewares

import warriorsActions from "./modules/warriors/warriorsActions";

// Routes pour récupérer les guerriers avec leurs armes
router.get("/api/warriors/with-weapons", warriorsActions.browseWithWeapons);

router.get("/api/warriors/mal", warriorsActions.getDarkWarriors);
router.get("/api/warriors/bien", warriorsActions.getGoodWarriors);

router.get("/api/warriors", warriorsActions.browse);
router.get("/api/warriors/:id", warriorsActions.read);
router.put("/api/warriors/:id", warriorsActions.edit);
router.post("/api/warriors", warriorsActions.add);
router.delete("/api/warriors", warriorsActions.destroy);

import weaponsActions from "./modules/weapons/weaponsActions";

router.get("/api/armes", weaponsActions.browse);
router.get("/api/armes/:id", weaponsActions.read);
router.put("/api/armes/:id", weaponsActions.edit);
router.post("/api/armes", weaponsActions.add);
router.delete("/api/armes", weaponsActions.destroy);

import memberActions from "./modules/member/memberActions";

router.get("/api/members", memberActions.browse);

import questionsActions from "./modules/Questions/questionsActions";

router.get("/api/questions", questionsActions.browse);
router.get("/api/questions/:id", questionsActions.read);
router.put("/api/questions/:id", questionsActions.edit);
router.post("/api/questions", questionsActions.add);
router.delete("/api/questions", questionsActions.destroy);

export default router;
