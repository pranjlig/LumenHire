const express = require("express");
const router = express.Router();

const multer = require("multer")
const {storage} = require("../cloudinary");
const upload = multer({storage})

const userFunctions = require("../controllers/users")

// router.post("/:id/make-portfolio", upload.single("profileImage"), upload.array("moreImages"), userFunctions.makePortfolio)
router.post(
    "/:id/make-portfolio", 
    upload.fields([
        {name: "profileImage", maxCount: 1},
        {name: "moreImages"}
    ]),
    userFunctions.makePortfolio)

module.exports = router