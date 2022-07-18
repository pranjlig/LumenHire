const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
var cors = require('cors');



const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")

if ( process.env.NODE_ENV !== "production" ) {
    require("dotenv").config()
}

mongoose.connect("mongodb://localhost:27017/portfolio")
    .then(() => {console.log("Mongoose Connection Open...")})
    .catch((err) => {console.log("Mongoose Connection Error...", err)})


// app.set("views", path.join(__dirname, "/views"))
// app.set("view engine", "ejs")
app.use(cors());

// app.use(express.urlencoded({ extended: true}));
app.use(
    bodyParser.json({
      limit: '50mb',
    }),
  );
  // create application/x-www-form-urlencoded parser
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: false,
    }),
  );
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, '/public')));

// const sessionConfig = {
//     // store,
//     name: "session",
//     secret: "This is secret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         // expires:  new Date() + 1000*60,
//     }
// }

// app.use(session(sessionConfig));

// app.use(flash());
// app.use((req, res, next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.warning = req.flash("warning");
//     res.locals.info = req.flash("info");
//     next();
// });



app.use("/users", userRoutes);
app.use("/", authRoutes);
// app.use("/admin", adminRoutes);
// app.use("/", userRoutes)

// app.get("*", function (req, res) {
//     res.render("error");   
// });

// app.post("/login", (req, res) => {
//     console.log("from server", req.body)
//     res.json({response: "logged in"})
// })

app.listen(8082, () => {
    console.log("Serving on port 8082...")
});

