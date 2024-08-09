const {
  createBookAuthor,
  getAllBookAuthor,
} = require("../controllers/bookauthorController");

const router = require("express").Router();

router.post("/", createBookAuthor);
router.get("/", getAllBookAuthor);

module.exports = router;
