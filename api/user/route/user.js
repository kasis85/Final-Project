const express = require("express");
const router = express.Router();
const auth = require("../../../config/auth");
const userController = require("../controller/userController");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me", auth,userController.getUserDetails);
router.post("/check-unique-email", userController.uniqueEmail);

module.exports = router;