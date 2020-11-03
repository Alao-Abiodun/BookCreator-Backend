const Book = require('../models/book.model');

class BookController {
  async addTask(req, res) {
    try {
      const { name, description, date_published } = req.body;
      const book = new Book({
        name,
        description,
        date_published,
        user: req.user._id,
      });
      await task.save();
      res.status(201).send(book);
    } catch (e) {
      res.status(404).send(e);
    }
  }
}

module.exports = new BookController();
