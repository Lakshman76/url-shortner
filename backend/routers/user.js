const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/register", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
