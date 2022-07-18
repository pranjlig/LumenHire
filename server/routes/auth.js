const express = require("express");
const router = express.Router();
const authFunctions = require("../controllers/auth")



router.post("/login", authFunctions.login);

router.post("/signup", authFunctions.signup);

// router.route("/forgot-password")
//     .get(authFunctions.renderForgotPage)
//     .post(authFunctions.forgotPassword)

// router.route("/reset/:token")
//     .get(authFunctions.renderReset)
//     .post(authFunctions.reset)

// router.get("/logout", authFunctions.logout)

module.exports = router;