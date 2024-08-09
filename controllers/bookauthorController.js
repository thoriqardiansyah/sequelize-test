const { BookAuthor } = require("../models");

module.exports = {
  createBookAuthor: async (req, res) => {
    try {
      const { authorId, bookId } = req.body;

      const data = await BookAuthor.create({
        authorId,
        bookId,
      });

      return res.status(201).json({ data });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },

  getAllBookAuthor: async (req, res) => {
    try {
      const data = await BookAuthor.findAll();

      if (!data) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },
};
