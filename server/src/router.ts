import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import des middlewares
import auth from "./middlewares/auth";
import form from "./middlewares/form";

// Define item-related routes
import warriorsActions from "./modules/warriors/warriorsActions";

router.get("/api/warriors", warriorsActions.browse);
router.get("/api/warriors/:id", warriorsActions.read);
router.put("/api/warriors/:id", warriorsActions.edit);
router.post("/api/warriors", form.validate, warriorsActions.add);
router.delete("/api/warriors", warriorsActions.destroy);

import weaponsActions from "./modules/weapons/weaponsActions";

router.get("/api/armes", weaponsActions.browse);
router.get("/api/armes/:id", weaponsActions.read);
router.put("/api/armes/:id", weaponsActions.edit);
router.post("/api/armes", weaponsActions.add);
router.delete("/api/armes", weaponsActions.destroy);

import memberActions from "./modules/member/memberActions";

router.get("/api/members", memberActions.browse);
router.post("/api/members", auth.hashPassword, memberActions.add);

router.post("/api/login", auth.login);

export default router;
