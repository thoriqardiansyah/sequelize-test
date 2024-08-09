const { Book, Author } = require("../models");

module.exports = {
  createBook: async (req, res) => {
    try {
      const { title, description, authorId } = req.body;

      const book = await Book.create({
        title,
        description,
      });

      // const author = await Author.findByPk(authorId);

      // if (!author) {
      //   return res.status(404).json({ error: "author not found!" });
      // }

      // await book.addAuthor(authorId);

      // Check if authorId is an array
      if (!Array.isArray(authorId)) {
        return res.status(400).json({ error: "authorId must be an array" });
      }

      // Check if all authors exist
      const authors = await Author.findAll({
        where: {
          id: authorId,
        },
      });

      if (authors.length !== authorId.length) {
        return res
          .status(404)
          .json({ error: "One or more authors not found!" });
      }
      // // Add all authors to the book
      await book.addAuthors(authors);

      return res.status(201).json({ message: "ok" });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },

  getAllBook: async (req, res) => {
    try {
      const data = await Book.findAll({
        include: [
          {
            model: Author,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            through: {
              attributes: [],
            },
          },
        ],
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
