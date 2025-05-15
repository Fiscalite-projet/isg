const express = require("express");
const router = express.Router();
const suarlControllers = require("../controllers/suarlController");


router.post("/addSuarl", suarlControllers.addSuarl);
router.get("/", suarlControllers.getAllSuarl);

module.exports = router;