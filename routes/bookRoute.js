const { createBook, getAllBook } = require("../controllers/bookController");

const router = require("express").Router();

router.post("/", createBook);
router.get("/", getAllBook);

module.exports = router;
