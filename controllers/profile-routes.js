const router = require("express").Router();
const User = require("../models/User");
const Group = require("../models/Group");

router.get("/", async (req, res) => {
  try {
    res.render("profile", {
      user: req.session.user, // pasing user data for handlebars profile
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
