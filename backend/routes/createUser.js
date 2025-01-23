const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwtsecret = "kXWd00xuNzOxblNW0VIIH4GwUJqgcD9X";
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password","Incorrect Password").isLength({ min: 5 }),
    body("name").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);

    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: secPassword,
      });
      res.json({ Success: true });
    } catch (error) {
      res.json({ Success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password","Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      const data = {
        user: {
          id: userData.id
        }
      }
      const authToken = jwt.sign(data,jwtsecret);
      //console.log(userData)
      return res.json({ Success: true , authToken: authToken});
    } catch (error) {
      console.log(error)
      return res.json({ Success: false });
    }
  }
);

module.exports = router;
