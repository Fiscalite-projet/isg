const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signUp", userController.signUp);
router.post("/connexion", userController.connexion);



module.exports = router;
