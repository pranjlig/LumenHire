const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require('crypto');
// const instadate = require("instadate");
const User = require("../models/user");
const jwt = require("jsonwebtoken")

if ( process.env.NODE_ENV !== "production" ) {
    require("dotenv").config()
}

const JWT_SECRET = process.env.JWT_SECRET


module.exports.signup = async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({email}) 
    if (user) {
        return res.json({message: "User with this email already exists.", type: "error"})
    }
    const hash = await bcrypt.hash(password, 12)
    const newUser = new User({email, password: hash})
    const savedUser = await newUser.save()
    return res.json({user: savedUser, message: "Successfully Registered.", type: "success"})

}

module.exports.login = async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({email})
    if (!user) {
        return res.json({message: "Email or password is incorrect.", type: "error"})
    }
    else {
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return res.json({message: "Email or password is incorrect.", type: "error"})
        }
        else{
            const token = jwt.sign({_id: user._id}, JWT_SECRET)
            return res.json({user: user, type: "success", token})
        }
    }
}


// module.exports.renderRegisterAdmin = (req, res) => {
//     res.render("users/register-admin")
// }

// module.exports.registerAdmin = async (req, res) => {
//     const {email, password, confirmPassword } = req.body
//     if (password !== confirmPassword) {
//         req.flash("error", "Passwords did not match.")
//         return res.redirect("/register-admin")
//     }
//     const hash = await bcrypt.hash(password, 12);
//     const admin = new Admin({email, password: hash})
//     const savedAdmin = await admin.save()            
//     req.session.user_id = savedAdmin._id
//     req.flash("success", "Successfully registered.")
//     res.redirect("/admin/add-project")
// }

// module.exports.logout = (req, res) => {   
//     // console.log("before", req.session, req.session.user_id)
//     req.flash("success", "Successfully logged out.")
//     res.redirect("/auth");
//     setTimeout(() => {
//         req.session.destroy()
//         // console.log("session destroyed")
//     }, 1000) 
//     // console.log("after", req.session)
//     res.redirect("/auth")
// }

// module.exports.renderForgotPage = (req, res) => {
//     res.render("users/forgot-password");
// }

// module.exports.forgotPassword = async (req, res) => {
//     const { email, type } = req.body
//     // const user = await Employee.findOne({ email }) || await Admin.findOne({ email })
//     let user = undefined
//     if (type === "none") {
//         req.flash("error", "Please select a type.")
//         return res.redirect("/auth")
//     }
//     if (type === "Admin") {
//         user = await Admin.findOne({ email })
//     }
//     else if (type === "Employee") {
//         user = await Employee.findOne({ email });
//     }  
//     if (!user) {
//         req.flash('error', 'No account with that email address exists.');
//         return res.redirect('/forgot');
//     }
//     if (user.resetPasswordCount === 2 && Math.abs(instadate.differenceInDates(new Date(), user.countExpires)) === 0) {
//         req.flash('error', 'You have exceeded the maximum attempts. Please try again tomorrow.');
//         return res.redirect("/auth")
//     } else {
//         if (user.resetPasswordCount > 0 && Math.abs(instadate.differenceInDates(new Date(), user.countExpires)) > 0) {
//             user.resetPasswordCount = 1
//         }
//         else {
//             user.resetPasswordCount += 1;
//         }
//         user.countExpires = new Date()
//         crypto.randomBytes(20, async function(err, buf) {
//             const token = buf.toString('hex');
//             user.resetPasswordToken = token;
//             user.resetPasswordExpires = Date.now() + 3600000;
//             await user.save()
//             const message = 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
//             'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
//             'http://' + req.headers.host + '/reset/' + token + '\n\n' +
//             'If you did not request this, please ignore this email and your password will remain unchanged.\n'
//             const isSent = await functions.sendMail(user.email, "Password Reset Token", message)
//             if (isSent) {
//                 req.flash('success', 'Link to reset your password has been mailed to your registered email address. Please check spam folder if not recieved in inbox.');  
//             } else{
//                 req.flash('error', 'Could not mail the link to reset your password. Please try after some time.');  
//             }
//             return res.redirect("/auth")
//         });    
//     } 
// }

// module.exports.renderReset = (req, res) => {
//     res.render("users/reset");
// }

// module.exports.reset = async (req, res) => {
//     const { password, confirmPassword } = req.body
//     if (password !== confirmPassword) {
//         req.flash("error", "Passwords did not match.")
//         res.redirect(req.originalUrl)
//     }
//     else {
//         const user = await Employee.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }) || await Admin.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } });
//         if (!user) {
//             req.flash('error', 'Password reset token is invalid or has expired.');
//             return res.redirect('back');
//         }    
//         const hash = await bcrypt.hash(password, 12);
//         user.password = hash
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpires = undefined;
//         await user.save()
//         req.flash("success", "Successfully changed your password.")
//         return res.redirect("/auth")
//     }
// }
