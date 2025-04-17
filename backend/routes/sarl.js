const express = require("express");
const router = express.Router();
const sarlControllers = require("../controllers/sarlController");

router.post("/addSarl", sarlControllers.addSarl);
router.get("/sarl",sarlControllers.getAllSarls)


module.exports = router;
