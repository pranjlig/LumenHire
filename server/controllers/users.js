const multer = require("multer")
const {storage} = require("../cloudinary");
const upload = multer({storage})

const User = require("../models/user")


module.exports.makePortfolio = async (req, res) => {
    const { id } = req.params
    console.log("file", req.file)
    console.log("files", req.files)
    console.log("body", req.body)
    // console.log("req", req)
    return res.json({message: "Success"})
    // const { name, city, state, country, gender, age, employmentStatus, phone1, phone2, currentRole, currentWorking, shortDescription, education, experience, additionalInformation, titles, skills: skillsCount, achievements: achievementCount, } = req.body
    // const { } = req.body
    // const user = new User.findOne({ id })
    // if (req.file) {
    //     user.image.url = req.file.path
    //     user.image.filename = req.file.filename
    // }
    // const savedUser = await user.save()

}