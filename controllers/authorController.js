const { Book, Author } = require("../models");

module.exports = {
  createAuthor: async (req, res) => {
    try {
      const { author } = req.body;

      const data = await Author.create({
        author,
      });

      return res.status(201).json({ data });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },

  getAllAuthor: async (req, res) => {
    try {
      const data = await Author.findAll({
        include: {
          model: Book,
          as: "anjing",
          attributes: { exclude: ["createdAt", "updatedAt"] },
          through: { attributes: [] },
        },
      });

      if (!data) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },
};
