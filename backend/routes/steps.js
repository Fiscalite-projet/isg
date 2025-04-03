const express = require("express");
const router = express.Router();
const stepsControllers = require("../controllers/stepsController");

router.get("/GetSteps", stepsControllers.GetSteps);
router.post("/AddForm", stepsControllers.AddForm);
router.get("/Allform", stepsControllers.Allform);

module.exports = router;
