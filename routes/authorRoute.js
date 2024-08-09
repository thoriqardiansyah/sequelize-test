const {
  createAuthor,
  getAllAuthor,
} = require("../controllers/authorController");

const router = require("express").Router();

router.post("/", createAuthor);
router.get("/", getAllAuthor);

module.exports = router;
