const express = require("express");
const router = express.Router();
const { authorLogin, authorRegister, getAllAuthers } = require("../controllers/auth.controller.js");
const validate = require("../middlewares/validation.middleware.js");

router.post("/register", validate, authorRegister);
router.post("/login", validate, authorLogin);
router.get("/author", getAllAuthers);

module.exports = router;
