const User = require('../models/user.model');

class UserController {
  async addUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = new User({
        username,
        email,
        password,
      });
      const token = await user.generateAuthToken();
      await user.save();
      return res.status(201).send({ user, token });
    } catch (e) {
      res.status(401).send(e);
    }
  }

  async signInUser(req, res) {
    try {
      const user = await User.findByCredentials(
        req.body.email,
        req.body.password
      );
      const token = await user.generateAuthToken();
      return res.send({ user, token });
    } catch (e) {
      return res.status(400).send();
    }
  }
}

module.exports = new UserController();
