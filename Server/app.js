const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require("body-parser")
const path = require('path')
const models = require('./models')

const VIEWS_PATH = path.join(__dirname, '/views')

app.use(express.urlencoded())

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set("views", VIEWS_PATH)
app.set("view engine", "mustache")


app.use('/uploads', express.static('uploads'))
app.use('/assets', express.static('assets'))

app.get("/", (req, res) => {
    res.render("main")
})
// see Mr. Azam's video on Async and await if async and await is confusing. It's not complicated at all.
// Async and await basically replaces .then() chaining
// https://www.udemy.com/course/nodejs-complete-guide-to-building-data-driven-applications/learn/lecture/14311354#content
app.post("/register",async (req, res) => {
    let fullName = req.body.fullName
    let email = req.body.email
    let password = req.body.password

    let persistedUser = await models.User.findOne({
        where: {
            username: email
        }
    })

    if (persistedUser == null) {
        let user = models.User.build({
            username: email,
            password: password
        })

        let savedUser = await user.save()
        if (savedUser != null) {
            res.redirect("/login")
        } else {
            res.render("/register", {message: "User already exists!"})
        }
    } else {
        res.render("/register", {message: "User already exists!"})
    }
})

app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})