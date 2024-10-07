const router = require("express").Router();

const { monthlyReport } = require("../controllers/salesController");

// Monthly Sales Report Route
router.get("/monthly", monthlyReport);

module.exports = router;
